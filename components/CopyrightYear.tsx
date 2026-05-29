"use client";

import { useEffect, useState } from "react";

export default function CopyrightYear() {
  // Fallback to current year at build time; updates on the client.
  const [year, setYear] = useState<number>(() => new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <span>{year}</span>;
}
