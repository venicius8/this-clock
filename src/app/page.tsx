"use client";

import ClockFace from "@/components/ClockFace";
import ClockControls from "@/components/ClockControls";
import { useClock } from "@/hooks/useClock";

export default function Home() {
  const { actual, guess, setGuess, newRound, submit } = useClock();

  return (
    <main className="p-10">
      <ClockFace hours={actual.hours} minutes={actual.minutes} />
      <ClockControls
        guess={guess}
        onGuessChange={setGuess}
        onGenerate={newRound}
        onSubmit={submit}
      />
    </main>
  );
}
