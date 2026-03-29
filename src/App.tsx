import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { FakePopup } from './components/FakePopup';
import { LiveDemoCard } from './components/LiveDemoCard';
import { ProofStrip } from './components/ProofStrip';
import { ContactModal } from './components/ContactModal';
import { ArrowRight, ArrowDown } from 'lucide-react';

const CATEGORIES = ["All", "Web Development", "Business Tools", "AI Automation"];

const PROJECTS = [
  {
    title: "OG BULLET IMAGE",
    category: "Web Development",
    description: "High-converting web development driving 3x more leads.",
    image: "https://djautofleet.com/wp-content/uploads/2026/03/OGbullet-1-scaled.png",
  },
  {
    title: "Local Kush Dealer",
    category: "Web Development",
    description: "E-commerce platform optimized for seamless transactions.",
    image: "https://djautofleet.com/wp-content/uploads/2026/03/localkushdealer-2-scaled.png",
  },
  {
    title: "Legit ID CHECKER",
    category: "Business Tools",
    description: "Business tool automating verification processes.",
    image: "https://djautofleet.com/wp-content/uploads/2026/03/Legit-ID-CHECKER-App-1-scaled.png",
  },
  {
    title: "AI RECEPTIONIST",
    category: "AI Automation",
    description: "24/7 automated call handling and appointment booking.",
    image: "https://djautofleet.com/wp-content/uploads/2026/03/Ai-Receptionist.png",
  },
  {
    title: "HIRE A VA",
    category: "Business Tools",
    description: "Web application streamlining virtual assistant hiring.",
    image: "https://djautofleet.com/wp-content/uploads/2026/03/hireava-scaled.png",
  },
  {
    title: "ROI ADS CALCULATOR",
    category: "Business Tools",
    description: "Interactive tool to calculate and project ad campaign returns.",
    image: "https://djautofleet.com/wp-content/uploads/2026/03/ad-roi-calculator.png",
  }
];

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(p => activeCategory === "All" || p.category === activeCategory);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden selection:bg-white/20 font-sans">
      <CustomCursor />
      <FakePopup />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Fixed Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-white/5 to-transparent blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-white/5 to-transparent blur-[150px]"
        />
      </div>

      {/* Main Vertical Scroll Container */}
      <div className="flex flex-col w-full relative z-10">
        
        {/* Section 1: Hero */}
        <section className="min-h-screen w-full flex flex-col justify-center relative px-6 md:px-24 py-24">
          <LiveDemoCard />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mt-20 md:mt-0"
          >
            <motion.h1 
              initial={{ letterSpacing: "0.05em" }}
              animate={{ letterSpacing: "-0.02em" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[1.1]"
            >
              I Build Things <br />
              <span className="text-white/50">That Actually Work</span>
            </motion.h1>
            
            <p className="text-lg md:text-3xl text-white/60 font-light max-w-3xl leading-relaxed mb-12">
              Web apps, AI tools, and high-converting websites designed to perform — not just look good.
            </p>

            <button 
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="hover-trigger group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/20 blur-md group-hover:bg-white/40 transition-colors" />
              <span className="relative z-10 flex items-center gap-2">
                View My Work <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
          </motion.div>

          <div className="absolute bottom-12 left-6 md:left-24 flex flex-col items-center gap-4 text-white/40">
            <span className="text-xs font-medium tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
            <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
              <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-white"
              />
            </div>
          </div>
        </section>

        {/* Section 2: About & Proof */}
        <section className="min-h-screen w-full flex flex-col justify-center items-center relative px-6 md:px-24 py-24">
          <div className="max-w-5xl text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
              I don’t just build websites. <br />
              <span className="text-white/40">I build systems that generate revenue.</span>
            </h2>
          </div>
          <ProofStrip />
        </section>

        {/* Section 3: Projects */}
        <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-24 py-24">
          <div className="mb-16">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">Selected <br className="hidden md:block"/>Work</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-trigger ${
                    activeCategory === category 
                      ? 'bg-white text-black' 
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.title} 
                  className="h-[400px] md:h-[500px] group relative rounded-3xl overflow-hidden hover-trigger cursor-pointer border border-white/10"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">{project.category}</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
                    <p className="text-base text-white/80 mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.description}</p>
                    <div className="flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      View Project <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Section 4: Skills & Final CTA */}
        <section className="min-h-screen w-full flex flex-col justify-center items-center relative px-6 md:px-24 py-24 text-center">
          
          <div className="mb-24">
            <h3 className="text-white/40 uppercase tracking-widest text-sm font-semibold mb-8">Core Stack</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
              {["AI Automation", "Web Apps", "APIs", "Integrations", "SEO"].map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                  className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 text-white/80 text-lg font-medium hover:bg-white/10 hover:border-white/30 transition-colors cursor-default hover-trigger"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">
            Let’s Build Something <br />
            <span className="text-white/40">That Works</span>
          </h2>

          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="hover-trigger group relative px-12 py-6 bg-white text-black rounded-full font-bold text-xl md:text-2xl overflow-hidden transition-transform hover:scale-105 mb-8"
          >
            <div className="absolute inset-0 bg-white/20 blur-md group-hover:bg-white/40 transition-colors" />
            <span className="relative z-10">Get In Touch</span>
          </button>

          <a href="tel:+17867518929" className="text-white/50 hover:text-white transition-colors text-xl font-light hover-trigger">
            +1 (786) 751 8929
          </a>
        </section>

      </div>
    </div>
  );
}
