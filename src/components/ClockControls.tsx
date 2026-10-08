"use client";

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
  return (
    <div className="mt-10 flex gap-4 border flex-col">
      <button className="bg-primary-button cursor-pointer" onClick={onGenerate}>
        Generate Clock
      </button>
      <div className="flex justify-around gap-4">
        <input
          className="w-1/3 border"
          placeholder="Enter hours (1-12)"
          type="number"
          min="1"
          max="12"
          onChange={(e) =>
            onGuessChange({ ...guess, hours: e.target.valueAsNumber })
          }
        />
        <input
          className="w-1/3 border"
          placeholder="Enter minutes (0-59)"
          type="number"
          min="0"
          max="59"
          onChange={(e) =>
            onGuessChange({ ...guess, minutes: e.target.valueAsNumber })
          }
        />
        <button
          className="bg-primary-button cursor-pointer hover:bg-element-hover p-2 rounded-xl"
          onClick={onSubmit}
        >
          Check Answer
        </button>
      </div>
    </div>
  );
}
