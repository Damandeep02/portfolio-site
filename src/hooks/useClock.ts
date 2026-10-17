import { useEffect, useState } from "react";

function format(d: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone,
  }).format(d);
}

export function useClock(timeZone: string) {
  const [time, setTime] = useState(() => format(new Date(), timeZone));

  useEffect(() => {
    const id = window.setInterval(() => setTime(format(new Date(), timeZone)), 1000 * 15);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return time;
}
