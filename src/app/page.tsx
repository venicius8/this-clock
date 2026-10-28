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
    <main className="p-10 ">
      <div className="flex flex-col lg:flex-row  justify-around gap-4">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <ClockFace
            hours={actual.hours}
            minutes={actual.minutes}
            faceStyle={faceStyle}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <ClockControls
            guess={guess}
            onGuessChange={setGuess}
            onGenerate={newRound}
            onSubmit={submit}
          />
          <ClockFaceControls
            faceStyle={faceStyle}
            onFaceStyleChange={setFaceStyle}
          />
        </div>
      </div>
    </main>
  );
}
