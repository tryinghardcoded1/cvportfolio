import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

const stats = [
  { label: "Leads Generated", value: 120, prefix: "+", suffix: "" },
  { label: "Calls Answered", value: 24, prefix: "", suffix: "/7" },
  { label: "Conversion Increase", value: 3, prefix: "", suffix: "x" },
];

export function ProofStrip() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
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
      const incrementTime = Math.max(duration / (end || 1), 16);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 flex flex-col items-center justify-center text-center group hover:bg-white/[0.04] transition-colors">
      <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">
        {prefix}{count}{suffix}
      </span>
      <span className="text-white/30 uppercase tracking-[0.2em] text-[10px] font-bold">{label}</span>
    </div>
  );
}
