"use client";

import { useRef } from "react";
import { Confetti, type ConfettiRef } from "./magicui/confetti";

export function ConfettiCard({ message }: { message: string }) {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="bg-background relative flex h-60 w-full flex-col items-center justify-center overflow-hidden rounded-lg border-none">
      <span className="pointer-events-none bg-gradient-to-b from-primary to-foreground/50 text-center leading-none font-bold whitespace-pre-wrap bg-clip-text text-transparent text-4xl sm:text-6xl md:text-7xl">
        {message}
      </span>
      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}
