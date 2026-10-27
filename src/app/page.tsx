"use client";

import ClockFace from "@/components/ClockFace";
import ClockControls from "@/components/ClockControls";
import { useClock } from "@/hooks/useClock";
import ClockFaceControls from "@/components/ClockFaceControls";
import { useClockFace } from "@/hooks/useClockFace";

export default function Home() {
  const { actual, guess, setGuess, newRound, submit } = useClock();
  const { faceStyle, setFaceStyle } = useClockFace();

  return (
    <main className="p-10">
      <ClockFace
        hours={actual.hours}
        minutes={actual.minutes}
        faceStyle={faceStyle}
      />
      <ClockControls
        guess={guess}
        onGuessChange={setGuess}
        onGenerate={newRound}
        onSubmit={submit}
      />
      <ClockFaceControls faceStyle={faceStyle} onFaceStyleChange={setFaceStyle} />
    </main>
  );
}
