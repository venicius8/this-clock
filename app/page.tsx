"use client";

import { useState } from "react";

export default function Home() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [guessHours, setGuessHours] = useState(0);
  const [guessMinutes, setGuessMinutes] = useState(0);

  function convertHoursToDegrees(hours: number) {
    return hours * 30 + minutes * 0.5;
  }

  function convertMinutesToDegrees(minutes: number) {
    return minutes * 6;
  }

  function clearInputs() {
    setGuessHours(0);
    setGuessMinutes(0);
  }

  function generateRandomTime() {
    const randomHours = Math.floor(Math.random() * 12);
    const randomMinutes = Math.floor(Math.random() * 60);

    setHours(randomHours === 0 ? 12 : randomHours);
    setMinutes(randomMinutes);

    clearInputs();
  }

  function checkAnswer(inputHours: number, inputMinutes: number) {
    if (inputHours === hours && inputMinutes === minutes) {
      alert("Correct!");
    } else {
      alert(
        `Incorrect! ${inputHours > hours ? "Too high for hours" : inputHours < hours ? "Too low for hours" : "Correct for hours"}. ${inputMinutes > minutes ? "Too high for minutes" : inputMinutes < minutes ? "Too low for minutes" : "Correct for minutes"}.`,
      );
    }
  }

  return (
    <main className="p-10">
      <div className="h-120 aspect-square bg-primary relative rounded-full">
        <div
          style={{
            transform: `translate(-50%, -100%) rotate(${convertMinutesToDegrees(minutes)}deg)`,
          }}
          className="h-50 w-1 rounded-2xl bg-foreground origin-bottom absolute left-1/2 top-1/2"
        ></div>
        <div
          style={{
            transform: `translate(-50%, -100%) rotate(${convertHoursToDegrees(hours)}deg)`,
          }}
          className="h-35 w-2 rounded-2xl bg-foreground origin-bottom absolute left-1/2 top-1/2"
        ></div>
      </div>
      <div className="mt-10 flex gap-4 border flex-col">
        <button
          className="bg-primary-button cursor-pointer"
          onClick={generateRandomTime}
        >
          Generate Clock
        </button>
        <div className="flex justify-around gap-4">
          <input
            className="w-1/3 border"
            placeholder="Enter hours (1-12)"
            type="number"
            min="1"
            max="12"
            onChange={(e) => setGuessHours(e.target.valueAsNumber)}
          />
          <input
            className="w-1/3 border"
            placeholder="Enter minutes (0-59)"
            type="number"
            min="0"
            max="59"
            onChange={(e) => setGuessMinutes(e.target.valueAsNumber)}
          />
          <button
            className="bg-primary-button cursor-pointer hover:bg-element-hover p-2 rounded-xl"
            onClick={() => {
              checkAnswer(guessHours, guessMinutes);
              if (guessHours === hours && guessMinutes === minutes)
                generateRandomTime();
            }}
          >
            Check Answer
          </button>
        </div>
      </div>
    </main>
  );
}
