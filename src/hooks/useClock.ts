"use client";

import { useState, useCallback } from "react";
import { generateRandomTime, checkAnswer } from "@/lib/clock";

export function useClock() {
  const [actual, setActual] = useState({ hours: 0, minutes: 0 });
  const [guess, setGuess] = useState({ hours: 0, minutes: 0 });

  const newRound = useCallback(() => {
    setActual(generateRandomTime());
    setGuess({ hours: 0, minutes: 0 });
  }, []);

  const submit = useCallback(() => {
    const result = checkAnswer(guess, actual);
    alert(result);
    if (result === "Correct!") newRound();
    return result === "Correct!";
  }, [guess, actual, newRound]);

  return { actual, guess, setGuess, newRound, submit };
}
