import { motion, MotionValue, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  category: {
    name: string;
    icon: any;
    count: number;
    image: string;
    description: string;
  };
  onClick: () => void;
}

export function CategoryCard({ index, total, scrollYProgress, category, onClick }: CategoryCardProps) {
  const isLast = index === total - 1;
  const start = isLast ? 0 : index / (total - 1);
  const end = isLast ? 1 : (index + 1) / (total - 1);

  const scale = useTransform(scrollYProgress, [start, end], [1, isLast ? 1 : 0.75]);
  const opacity = useTransform(scrollYProgress, [start, end], [1, isLast ? 1 : 0.15]);
  const y = useTransform(scrollYProgress, [start, end], [0, isLast ? 0 : -150]);

  return (
    <motion.div
      style={{ scale, opacity, y }}
      onClick={onClick}
      className="w-full max-w-5xl mx-auto p-4 md:p-8 h-[60vh] flex flex-col justify-center origin-top cursor-pointer group"
    >
      <div className="w-full h-full rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 overflow-hidden relative shadow-2xl">
        <img 
          src={category.image} 
          alt={category.name}
          loading="lazy"
          className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent opacity-90" />
        
        <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
          <div className="flex items-center gap-4 mb-4">
            <category.icon className="w-12 h-12 text-white/80" />
            <span className="px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">
              {category.count} Projects
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
            {category.name}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl font-light group-hover:translate-x-4 transition-transform duration-500 delay-75 drop-shadow-md">
            {category.description}
          </p>
          <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors duration-300">
            <span className="text-xl font-light">Explore Category</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
