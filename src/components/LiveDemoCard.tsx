import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export function LiveDemoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="max-w-md mx-auto text-left hover-trigger"
    >
      <motion.div
        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
        className="bg-white/[0.03] backdrop-blur-xl border border-white/5 p-6 rounded-3xl flex flex-col gap-4 group cursor-default transition-colors duration-500"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Immediate Access</span>
          <div className="flex items-center gap-1.5 bg-green-500/5 px-2 py-1 rounded-full border border-green-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-bold text-green-400/80 uppercase tracking-widest">Live Now</span>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
             AI Voice Receptionist
          </h3>
          <p className="text-sm text-white/40 font-light leading-relaxed">
            Experience our 24/7 automated call handler. Dial <strong className="text-white/80">+1 (786) 751 8929</strong> to test the speed and accuracy in real-time.
          </p>
        </div>

        <a 
          href="tel:+17867518929" 
          className="block w-full py-4 rounded-2xl bg-white text-black text-center font-bold text-sm hover:bg-white/90 transition-all duration-300"
        >
          Test It Live
        </a>
      </motion.div>
    </motion.div>
  );
}
