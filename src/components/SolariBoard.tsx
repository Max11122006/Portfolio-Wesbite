"use client";

import SolariFlap from "./SolariFlap";

interface SolariBoardProps {
  rows: { text: string; color?: "white" | "amber" }[];
}

export default function SolariBoard({ rows }: SolariBoardProps) {
  return (
    <div className="solari-board">
      {rows.map((row, rowIndex) => {
        const baseDelay = rowIndex * 250; // Line 2 starts 250ms after line 1
        return (
          <div key={rowIndex} className="solari-row">
            {row.text.split("").map((char, charIndex) => {
              // Stagger left-to-right with slight randomness
              const charDelay =
                baseDelay + charIndex * 35 + Math.random() * 40;
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
