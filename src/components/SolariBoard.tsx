"use client";

import SolariFlap from "./SolariFlap";

interface SolariBoardProps {
  rows: { text: string; color?: "white" | "amber" }[];
}

export default function SolariBoard({ rows }: SolariBoardProps) {
  return (
    <div className="solari-board">
      {rows.map((row, rowIndex) => {
        const baseDelay = rowIndex * 400; // Line 2 starts 400ms after line 1
        return (
          <div key={rowIndex} className="solari-row">
            {row.text.split("").map((char, charIndex) => {
              // Stagger left-to-right with slight randomness
              const charDelay =
                baseDelay + charIndex * 60 + Math.random() * 80;
              return (
                <SolariFlap
                  key={`${rowIndex}-${charIndex}`}
                  targetChar={char}
                  delay={charDelay}
                  color={row.color || "white"}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
