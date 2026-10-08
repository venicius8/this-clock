import { hoursToDegrees, minutesToDegrees } from "@/lib/clock";

type Props = { hours: number; minutes: number };

export default function ClockFace({ hours, minutes }: Props) {
  return (
    <div className="h-120 aspect-square bg-primary relative rounded-full">
      <div
        style={{
          transform: `translate(-50%, -100%) rotate(${minutesToDegrees(minutes)}deg)`,
        }}
        className="h-50 w-1 rounded-2xl bg-foreground origin-bottom absolute left-1/2 top-1/2"
      />
      <div
        style={{
          transform: `translate(-50%, -100%) rotate(${hoursToDegrees(hours, minutes)}deg)`,
        }}
        className="h-35 w-2 rounded-2xl bg-foreground origin-bottom absolute left-1/2 top-1/2"
      />
    </div>
  );
}
