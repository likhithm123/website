"use client";

import { useEffect, useState } from "react";
import { Clock, Calendar } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

// Conference Start: 10 February 2028, 09:00:00 IST (Indian Standard Time UTC+5:30)
const EVENT_TARGET_DATE = new Date("2028-02-10T09:00:00+05:30").getTime();

function calculateTimeLeft(): TimeLeft {
  const now = new Date().getTime();
  const diff = EVENT_TARGET_DATE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isExpired: false };
}

export default function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Avoid hydration mismatch by waiting for client mount
  if (!mounted || !timeLeft) {
    return null;
  }

  // Once countdown reaches 0, completely disappear from the DOM
  if (timeLeft.isExpired) {
    return null;
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section aria-label="Event Countdown" className="w-full">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-gradient-to-r from-[#001733]/95 via-[#002147]/95 to-[#001733]/95 p-4 sm:p-6 md:p-7 shadow-2xl backdrop-blur-md">
          {/* Subtle Ambient Gold Glow */}
          <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-[#F5A623]/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-[#00B4D8]/15 blur-2xl" />

          {/* Header Row */}
          <div className="relative z-10 mb-4 sm:mb-5 flex flex-wrap items-center justify-between gap-2.5 border-b border-white/10 pb-3 sm:pb-4 text-center sm:text-left">
            <div className="flex items-center gap-2 mx-auto sm:mx-0">
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#F5A623]/20 text-[#F5A623] border border-[#F5A623]/30">
                <Clock className="h-4 w-4 animate-pulse" />
              </span>
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#F5A623]">
                  Conference Countdown
                </span>
                <p className="text-xs sm:text-sm font-medium text-white/90">
                  Countdown to ic-ETITE&apos;28 Inauguration
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] sm:text-xs font-semibold text-white/80 border border-white/10 mx-auto sm:mx-0">
              <Calendar className="h-3 w-3 text-[#F5A623]" />
              <span>10–11 February 2028 · VIT Vellore</span>
            </div>
          </div>

          {/* Countdown Digit Blocks (Fully Responsive for Mobile, iOS, Mac, Tablet, Desktop) */}
          <div className="relative z-10 grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="group flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border border-white/15 bg-white/[0.07] p-2.5 sm:p-4 md:p-5 text-center shadow-md transition-all duration-300 hover:border-[#F5A623]/50 hover:bg-white/[0.12]"
              >
                <div className="font-mono text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-sm font-sans tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="mt-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F5A623]/90 sm:tracking-widest">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
