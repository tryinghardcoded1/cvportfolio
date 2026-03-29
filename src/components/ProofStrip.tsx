import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

const stats = [
  { label: "Leads Generated", value: 120, prefix: "+", suffix: "" },
  { label: "Calls Answered", value: 24, prefix: "", suffix: "/7" },
  { label: "Conversion Increase", value: 3, prefix: "", suffix: "x" },
];

export function ProofStrip() {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-center py-16 border-y border-white/10 bg-white/[0.02] backdrop-blur-md w-[80vw] mx-auto rounded-3xl">
      {stats.map((stat, i) => (
        <StatItem key={i} {...stat} />
      ))}
    </div>
  );
}

function StatItem({ label, value, prefix, suffix }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = (duration / end);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-2">
        {prefix}{count}{suffix}
      </span>
      <span className="text-white/50 uppercase tracking-widest text-sm font-semibold">{label}</span>
    </div>
  );
}
