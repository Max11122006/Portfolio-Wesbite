import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL!;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Send notification to site owner
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      subject: `New message from ${name}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    // Send confirmation to the sender
    await resend.emails.send({
      from: "Max Dubowski <onboarding@resend.dev>",
      to: email,
      subject: "Message received — Max Dubowski",
      text: [
        `Hi ${name},`,
        ``,
        `Thanks for reaching out. I've received your message and will get back to you soon.`,
        ``,
        `— Max`,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
