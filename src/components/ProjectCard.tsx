import { motion, MotionValue, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  project: {
    title: string;
    description: string;
    tags: string[];
    image: string;
    stats: { label: string; value: string }[];
  };
}

export function ProjectCard({ index, total, scrollYProgress, project }: ProjectCardProps) {
  const isLast = index === total - 1;
  const start = isLast ? 0 : index / (total - 1);
  const end = isLast ? 1 : (index + 1) / (total - 1);

  const scale = useTransform(scrollYProgress, [start, end], [1, isLast ? 1 : 0.75]);
  const opacity = useTransform(scrollYProgress, [start, end], [1, isLast ? 1 : 0.15]);
  const y = useTransform(scrollYProgress, [start, end], [0, isLast ? 0 : -150]);

  return (
    <motion.div
      style={{ scale, opacity, y }}
      className="w-full max-w-6xl mx-auto p-4 md:p-8 h-[75vh] flex flex-col justify-center origin-top"
    >
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-6">
        
        {/* Main Image - Spans 3 cols, 2 rows */}
        <div className="md:col-span-3 md:row-span-2 rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 overflow-hidden relative group shadow-2xl">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">{project.title}</h2>
            <p className="text-white/70 text-lg md:text-xl max-w-xl font-light leading-relaxed">{project.description}</p>
          </div>
        </div>

        {/* Stats - Spans 1 col, 2 rows */}
        <div className="md:col-span-1 md:row-span-2 rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-8 flex flex-col justify-center gap-12 shadow-2xl">
           {project.stats.map(stat => (
             <div key={stat.label} className="flex flex-col">
               <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-2">{stat.value}</span>
               <span className="text-white/40 text-sm uppercase tracking-widest font-semibold">{stat.label}</span>
             </div>
           ))}
        </div>

        {/* Tags - Spans 2 cols, 1 row */}
        <div className="md:col-span-2 md:row-span-1 rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-8 flex flex-col justify-center shadow-2xl">
          <h3 className="text-white/40 text-xs uppercase tracking-widest mb-5 font-semibold">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA - Spans 2 cols, 1 row */}
        <div className="md:col-span-2 md:row-span-1 flex gap-4 md:gap-6">
          <div className="flex-1 rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-6 md:p-8 flex items-center justify-between group cursor-pointer hover:bg-white/[0.06] transition-all duration-500 shadow-2xl">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 tracking-tight">Case Study</h3>
              <p className="text-white/50 text-sm font-light hidden sm:block">Explore process</p>
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all duration-500 group-hover:scale-110 shrink-0">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
          <div className="flex-1 rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-6 md:p-8 flex items-center justify-between group cursor-pointer hover:bg-white/[0.06] transition-all duration-500 shadow-2xl">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 tracking-tight">View Demo</h3>
              <p className="text-white/50 text-sm font-light hidden sm:block">Live preview</p>
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all duration-500 group-hover:scale-110 shrink-0">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
