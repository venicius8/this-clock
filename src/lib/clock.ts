export function hoursToDegrees(hours: number, minutes: number): number {
  return hours * 30 + minutes * 0.5;
}

export function minutesToDegrees(minutes: number): number {
  return minutes * 6;
}

export function generateRandomTime(): { hours: number; minutes: number } {
  const h = Math.floor(Math.random() * 12);
  return {
    hours: h === 0 ? 12 : h,
    minutes: Math.floor(Math.random() * 60),
  };
}

export function checkAnswer(
  guess: { hours: number; minutes: number },
  actual: { hours: number; minutes: number },
): string {
  if (guess.hours === actual.hours && guess.minutes === actual.minutes) {
    return "Correct!";
  }
  const hMsg =
    guess.hours > actual.hours
      ? "Too high for hours"
      : guess.hours < actual.hours
        ? "Too low for hours"
        : "Correct for hours";
  const mMsg =
    guess.minutes > actual.minutes
      ? "Too high for minutes"
      : guess.minutes < actual.minutes
        ? "Too low for minutes"
        : "Correct for minutes";
  return `${hMsg}. ${mMsg}.`;
}
