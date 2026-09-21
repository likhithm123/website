"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      aria-label="Navigate to top"
      title="Navigate to top"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[#0056B3] hover:bg-[#00428C] active:bg-[#003366] text-white shadow-[0_4px_16px_rgba(0,86,179,0.4)] border border-blue-400/40 transition-all hover:scale-105 active:scale-95 group cursor-pointer"
    >
      <ArrowUp className="w-4 h-4 text-[#72EFDD] group-hover:-translate-y-0.5 transition-transform" />
      <span className="text-xs font-bold tracking-wide">Top</span>
    </button>
  );
}
