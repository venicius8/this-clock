"use client";

import { useState } from "react";

export function useClockFace() {
  const [faceStyle, setFaceStyle] = useState<"numbers" | "dashes" | "none">(
    "dashes",
  );

  return { faceStyle, setFaceStyle };
}
