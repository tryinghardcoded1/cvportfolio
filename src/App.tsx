import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { FakePopup } from './components/FakePopup';
import { LiveDemoCard } from './components/LiveDemoCard';
import { ProofStrip } from './components/ProofStrip';
import { ContactModal } from './components/ContactModal';
import { ArrowRight, Sparkles, Globe, Brain, Zap, Layout, Code2, Database } from 'lucide-react';

const CATEGORIES = ["All", "Web Development", "Business Tools", "AI Automation"];

const PROJECTS = [
  {
    title: "OG BULLET IMAGE",
    category: "Web Development",
    description: "High-converting web development driving 3x more leads.",
    image: "https://djautofleet.com/wp-content/uploads/2026/03/OGbullet-1-scaled.png",
    className: "md:col-span-8 md:row-span-2",
  },
  {
    title: "AI RECEPTIONIST",
    category: "AI Automation",
    description: "24/7 automated call handling and appointment booking.",
    image: "https://djautofleet.com/wp-content/uploads/2026/03/Ai-Receptionist.png",
    className: "md:col-span-4 md:row-span-2",
  },
  {
    title: "Local Kush Dealer",
    category: "Web Development",
    description: "E-commerce platform optimized for seamless transactions.",
    image: "https://djautofleet.com/wp-content/uploads/2026/03/localkushdealer-2-scaled.png",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "ROI ADS CALCULATOR",
    category: "Business Tools",
    description: "Interactive tool to calculate and project ad campaign returns.",
    image: "https://djautofleet.com/wp-content/uploads/2026/03/ad-roi-calculator.png",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Legit ID CHECKER",
    category: "Business Tools",
    description: "Business tool automating verification processes.",
    image: "https://djautofleet.com/wp-content/uploads/2026/03/Legit-ID-CHECKER-App-1-scaled.png",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "HIRE A VA",
    category: "Business Tools",
    description: "Web application streamlining virtual assistant hiring.",
    image: "https://djautofleet.com/wp-content/uploads/2026/03/hireava-scaled.png",
    className: "md:col-span-12 md:row-span-2",
  }
];

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(p => activeCategory === "All" || p.category === activeCategory);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-white/20 font-sans relative overflow-hidden">
      <CustomCursor />
      <FakePopup />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Grid Pattern Background */}
      <div className="fixed inset-0 z-0 opacity-[0.03] bg-grid pointer-events-none" />
      
      {/* Glow Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed -bottom-40 left-0 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none z-0" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        
        {/* Navigation / Header */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none">
          <div className="pointer-events-auto bg-black/50 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full flex items-center gap-8">
            <span className="text-sm font-bold tracking-tighter">CV CREATION</span>
            <div className="flex items-center gap-6">
              <a href="#work" className="text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest">Work</a>
              <a href="#about" className="text-xs text-white/50 hover:text-white transition-colors uppercase tracking-widest">About</a>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="text-xs font-bold bg-white text-black px-4 py-1.5 rounded-full hover:bg-white/90 transition-all"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center pt-20 pb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-white/50 fill-white/50" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Modern Digital Systems</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-[112px] font-bold tracking-tight leading-[0.9] mb-8"
          >
            I Build Things <br />
            <span className="text-white/30 text-glow">That Actually Work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/50 max-w-2xl font-light leading-relaxed mb-12"
          >
            High-converting web apps, AI automation tools, and performance-driven websites for forward-thinking brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Explore Solutions
            </button>
            <button 
               onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Contact Me
            </button>
          </motion.div>

          <div className="mt-24 w-full">
            <LiveDemoCard />
          </div>
        </section>

        {/* Info Grid (Bento Style) */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-32">
          <div className="md:col-span-8 bg-white/[0.02] border border-white/5 rounded-[32px] p-12 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-full bg-dot-grid mask-radial opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Revenue-First Engineering</h3>
              <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                I don’t just build websites. I build integrated digital systems that automate lead generation and capture revenue 24/7.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-white/[0.02] border border-white/5 rounded-[32px] p-8 flex flex-col gap-6 ">
             <div className="bg-white/5 rounded-2xl p-6 border border-white/5 flex items-center gap-4 group">
                <Brain className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />
                <div>
                   <h4 className="font-bold">AI Native</h4>
                   <p className="text-xs text-white/40">Automating the mundane</p>
                </div>
             </div>
             <div className="bg-white/5 rounded-2xl p-6 border border-white/5 flex items-center gap-4 group">
                <Layout className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />
                <div>
                   <h4 className="font-bold">High Conversion</h4>
                   <p className="text-xs text-white/40">Optimized UX for sales</p>
                </div>
             </div>
             <div className="bg-white/5 rounded-2xl p-6 border border-white/5 flex items-center gap-4 group">
                <Zap className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />
                <div>
                   <h4 className="font-bold">Fast Delivery</h4>
                   <p className="text-xs text-white/40">Market-ready in weeks</p>
                </div>
             </div>
          </div>

          <div className="md:col-span-12">
            <ProofStrip />
          </div>
        </section>

        {/* Project Bento Grid */}
        <section id="work" className="mb-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Selected work</h2>
              <p className="text-white/40 max-w-md font-light">A curated list of high-impact digital products and automation systems.</p>
            </div>
            
            <div className="flex items-center gap-2 p-1 bg-white/5 rounded-full border border-white/10">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeCategory === category 
                      ? 'bg-white text-black' 
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[400px] gap-4">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  key={project.title}
                  className={`${project.className || 'md:col-span-4 md:row-span-1'} relative rounded-[32px] overflow-hidden group border border-white/5 hover:border-white/20 transition-all`}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-2">{project.category}</span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-white/40 font-light max-w-xs">{project.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                      Visit Project <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Engineering Stack</h2>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              Leveraging the most powerful modern tools to build stable, scalable, and beautifully designed digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: <Code2 className="w-6 h-6" />, title: "Full-Stack Dev", desc: "Next.js, TypeScript, React" },
              { icon: <Brain className="w-6 h-6" />, title: "AI Integration", desc: "OpenAI, LangChain, Anthropic" },
              { icon: <Database className="w-6 h-6" />, title: "Backend Systems", desc: "Node.js, PostgreSQL, Supabase" },
              { icon: <Globe className="w-6 h-6" />, title: "Automation", desc: "Make.com, n8n, Custom APIs" }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 hover:bg-white/[0.04] transition-colors group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 text-white/50 group-hover:text-white transition-colors group-hover:scale-110 duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-white/40 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-white/[0.02] border border-white/5 rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-[0.03] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-[80px] font-bold tracking-tight leading-none mb-12">
              Ready to scale <br />
              <span className="text-white/30">your operations?</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform"
              >
                Let’s Start a Project
              </button>
              <a href="tel:+17867518929" className="px-12 py-6 bg-white/5 border border-white/10 rounded-full font-bold text-xl hover:bg-white/10 transition-colors">
                +1 (786) 751 8929
              </a>
            </div>
            <p className="mt-12 text-white/30 text-xs font-bold uppercase tracking-[0.3em]">Available for selected 2024 projects</p>
          </div>
        </section>

        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-30 text-xs font-bold uppercase tracking-widest">
           <span>© 2024 CV CREATION</span>
           <div className="flex items-center gap-8">
              <span>Based in US</span>
              <span>EST Timezone</span>
           </div>
        </footer>

      </main>
    </div>
  );
}
