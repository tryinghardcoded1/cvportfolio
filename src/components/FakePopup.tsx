import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { PhoneCall, CheckCircle2 } from 'lucide-react';

export function FakePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsVisible(true);
      setStep(1);
    }, 3000);

    const timer2 = setTimeout(() => setStep(2), 4500);
    const timer3 = setTimeout(() => setStep(3), 6000);
    const timer4 = setTimeout(() => setIsVisible(false), 8500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="fake-popup"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 bg-[#111] border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-xl w-80"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center relative">
              <PhoneCall className="w-6 h-6 text-green-400" />
              <div className="absolute inset-0 rounded-full border border-green-400/50 animate-ping" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Incoming Call...</p>
              <p className="text-xs text-white/50">New Lead: Roofing Inquiry</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <AnimatePresence>
              {step >= 2 && (
                <motion.div key="step-2" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-green-400" /> AI Answered
                </motion.div>
              )}
              {step >= 3 && (
                <motion.div key="step-3" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-green-400" /> Appointment Booked
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
