"use client";

import { useRef } from "react";

type Props = {
  guess: { hours: number; minutes: number };
  onGuessChange: (g: { hours: number; minutes: number }) => void;
  onGenerate: () => void;
  onSubmit: () => void;
};

export default function ClockControls({
  guess,
  onGuessChange,
  onGenerate,
  onSubmit,
}: Props) {
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);

  const clearInputs = () => {
    if (hoursRef.current) hoursRef.current.value = "";
    if (minutesRef.current) minutesRef.current.value = "";
  };

  return (
    <div className="mt-10 flex gap-4 border flex-col">
      <button
        className="bg-primary-button cursor-pointer"
        onClick={() => {
          onGenerate();
          clearInputs();
        }}
      >
        Generate Clock
      </button>
      <div className="flex justify-around gap-4">
        <input
          ref={hoursRef}
          className="w-1/3 border"
          placeholder="Enter hours (1-12)"
          type="number"
          min="1"
          max="12"
          onChange={(e) =>
            onGuessChange({ ...guess, hours: e.target.valueAsNumber })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              minutesRef.current?.focus();
            }
          }}
        />
        <input
          ref={minutesRef}
          className="w-1/3 border"
          placeholder="Enter minutes (0-59)"
          type="number"
          min="0"
          max="59"
          onChange={(e) =>
            onGuessChange({ ...guess, minutes: e.target.valueAsNumber })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
        />
        <button
          className="bg-primary-button cursor-pointer hover:bg-element-hover p-2 rounded-xl"
          onClick={() => {
            onSubmit();
            hoursRef.current?.focus();
          }}
        >
          Check Answer
        </button>
      </div>
    </div>
  );
}
