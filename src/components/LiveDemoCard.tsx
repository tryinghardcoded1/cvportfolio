import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export function LiveDemoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 2.5, duration: 0.8, type: "spring" }}
      className="absolute right-[5%] top-[20%] md:right-[10%] md:top-[30%] z-20 w-[300px] text-left hover-trigger"
    >
      <motion.div
        animate={{ 
          boxShadow: ["0 0 15px rgba(255,255,255,0.02)", "0 0 30px rgba(255,255,255,0.1)", "0 0 15px rgba(255,255,255,0.02)"] 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.2)" }}
        className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col gap-4 group cursor-default"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/50">Live Demo</span>
          <div className="flex items-center gap-1.5 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Live</span>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
            <Phone className="w-5 h-5 text-white/80" /> Talk to My AI Receptionist
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Call <strong className="text-white/90">+1 (786) 751 8929</strong> — it answers instantly.
          </p>
        </div>

        <a 
          href="tel:+17867518929" 
          className="block w-full py-3 rounded-xl bg-white/10 border border-white/20 text-white text-center font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          Call Now
        </a>
      </motion.div>
    </motion.div>
  );
}
