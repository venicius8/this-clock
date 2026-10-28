import { hoursToDegrees, minutesToDegrees } from "@/lib/clock";

type ClockFaceStyle = "numbers" | "dashes" | "none";

type Props = {
  hours: number;
  minutes: number;
  faceStyle?: ClockFaceStyle;
};

export default function ClockFace({
  hours,
  minutes,
  faceStyle = "numbers",
}: Props) {
  return (
    <div className="flex justify-center w-full">
      <div className="w-3/5 max-w-120 aspect-square bg-primary relative rounded-full border border-foreground">
        {faceStyle !== "none" &&
          Array.from({ length: 12 }, (_, i) => {
            const hour = i === 0 ? 12 : i;
            const angle = i * 30;

            return (
              <div
                key={hour}
                className="absolute inset-0"
                style={{
                  transform: `rotate(${angle}deg)`,
                }}
              >
                {faceStyle === "numbers" ? (
                  <span
                    className="absolute left-1/2 top-4 -translate-x-1/2"
                    style={{
                      transform: `rotate(-${angle}deg)`,
                    }}
                  >
                    {hour}
                  </span>
                ) : (
                  <div className="absolute left-1/2 top-3 h-4 w-1 -translate-x-1/2 rounded-full bg-foreground" />
                )}
              </div>
            );
          })}

        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground z-10" />

        <div
          style={{
            transform: `translateY(-100%) rotate(${minutesToDegrees(minutes)}deg)`,
          }}
          className=" absolute left-1/2 top-1/2 h-[40%] w-1 -translate-x-1/2 origin-bottom rounded-full bg-foreground transition-transform duration-1000 ease-in-out"
        />

        <div
          style={{
            transform: `translateY(-100%) rotate(${hoursToDegrees(hours, minutes)}deg)`,
          }}
          className="absolute left-1/2 top-1/2 h-[30%] w-2 -translate-x-1/2 origin-bottom rounded-full bg-foreground transition-transform duration-1000 ease-in-out"
        />
      </div>
    </div>
  );
}
