import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';
import { ChevronDown, Cpu, Globe, Briefcase, TrendingUp, ArrowLeft } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { CategoryCard } from './components/CategoryCard';

const CATEGORIES = [
  { name: "Web Development", icon: Globe, description: "High-performance websites and e-commerce platforms." },
  { name: "Business Tools", icon: Briefcase, description: "Internal tools, AI receptionists, and analytics dashboards." },
  { name: "Web Application", icon: Cpu, description: "Complex, interactive web apps and SaaS platforms." },
  { name: "Full Platform", icon: TrendingUp, description: "End-to-end platforms like crypto exchanges and marketplaces." },
];

const PROJECTS = [
  {
    title: "OG BULLET IMAGE",
    category: "Web Development",
    description: "High-end web development project showcasing modern design principles.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://djautofleet.com/wp-content/uploads/2026/03/OGbullet-1-scaled.png",
    stats: [
      { label: "Performance", value: "99" },
      { label: "Conversion", value: "+45%" }
    ]
  },
  {
    title: "Local kush dealer",
    category: "Web Development",
    description: "E-commerce platform with seamless user experience and secure checkout.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    image: "https://djautofleet.com/wp-content/uploads/2026/03/localkushdealer-2-scaled.png",
    stats: [
      { label: "Sales", value: "3x" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    title: "Legit ID CHECKER",
    category: "Business Tools",
    description: "Advanced identity verification tool for secure business operations.",
    tags: ["React", "Node.js", "AI Vision"],
    image: "https://djautofleet.com/wp-content/uploads/2026/03/Legit-ID-CHECKER-App-1-scaled.png",
    stats: [
      { label: "Accuracy", value: "99.8%" },
      { label: "Checks", value: "1M+" }
    ]
  },
  {
    title: "AI RECEPTIONIST",
    category: "Business Tools",
    description: "Intelligent automated receptionist handling customer inquiries 24/7.",
    tags: ["OpenAI", "WebSockets", "React"],
    image: "https://djautofleet.com/wp-content/uploads/2026/03/Ai-Receptionist.png",
    stats: [
      { label: "Response", value: "<1s" },
      { label: "Satisfaction", value: "98%" }
    ]
  },
  {
    title: "HIRE A VA",
    category: "Web Application",
    description: "Platform connecting businesses with top-tier virtual assistants.",
    tags: ["Vue", "Firebase", "Tailwind"],
    image: "https://djautofleet.com/wp-content/uploads/2026/03/hireava-scaled.png",
    stats: [
      { label: "Placements", value: "500+" },
      { label: "Retention", value: "95%" }
    ]
  },
  {
    title: "BINANCE CLONE",
    category: "Full Platform",
    description: "Comprehensive cryptocurrency exchange platform with real-time trading.",
    tags: ["React", "Web3", "Node.js", "Redis"],
    image: "https://djautofleet.com/wp-content/uploads/2026/03/Copy-of-Binance-Cypto-Exchange-Google-AI-Studio-03-22-2026_12_58_AM-1.png",
    stats: [
      { label: "Volume", value: "$50M+" },
      { label: "Latency", value: "12ms" }
    ]
  },
  {
    title: "EASY AND SIMPLE SEO",
    category: "Business Tools",
    description: "Streamlined SEO optimization tool for small to medium businesses.",
    tags: ["Next.js", "Python", "Data API"],
    image: "https://djautofleet.com/wp-content/uploads/2026/03/Simple-SEO-_-Google-AI-Studio.png",
    stats: [
      { label: "Traffic", value: "+210%" },
      { label: "Users", value: "10K+" }
    ]
  },
  {
    title: "AD MAKER & ANALYZER",
    category: "Business Tools",
    description: "All-in-one platform for creating and analyzing digital ad campaigns.",
    tags: ["React", "D3.js", "TensorFlow"],
    image: "https://djautofleet.com/wp-content/uploads/2026/03/admakeranalyzer-1.png",
    stats: [
      { label: "Ad Spend", value: "-30%" },
      { label: "ROI", value: "2.5x" }
    ]
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const spotlightY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  function handleMouseMove(event: React.MouseEvent) {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  }

  const filteredProjects = activeCategory 
    ? PROJECTS.filter(p => p.category === activeCategory) 
    : [];

  const categoryData = CATEGORIES.map(cat => {
    const catProjects = PROJECTS.filter(p => p.category === cat.name);
    return {
      ...cat,
      count: catProjects.length,
      image: catProjects[0]?.image || "https://picsum.photos/seed/fallback/1920/1080"
    };
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const baseColors = ['#050505', '#0f172a', '#1e1b4b', '#2e1065', '#3b0764'];
  const colorStops = baseColors.map((_, i) => i / (baseColors.length - 1));
  const backgroundColor = useTransform(scrollYProgress, colorStops, baseColors);

  return (
    <motion.div 
      style={{ backgroundColor }}
      onMouseMove={handleMouseMove}
      className="min-h-screen text-white transition-colors duration-0 font-sans selection:bg-white/20 relative"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      {/* Hero Section */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Selected Works
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            A collection of digital experiences blending high-end design with robust engineering.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/30 animate-bounce" />
        </motion.div>
      </div>

      {/* Back Button (Only visible when a category is active) */}
      {activeCategory && (
        <div className="fixed top-6 left-6 z-50">
          <button 
            onClick={() => { setActiveCategory(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white/10 shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Categories</span>
          </button>
        </div>
      )}

      {/* Stacking Cards Container */}
      <div ref={containerRef} className="relative">
        {activeCategory ? (
          filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div 
                key={project.title} 
                className="h-screen sticky top-0 flex items-center justify-center pt-32 overflow-hidden"
              >
                <ProjectCard 
                  index={index} 
                  total={filteredProjects.length} 
                  scrollYProgress={scrollYProgress} 
                  project={project} 
                />
              </div>
            ))
          ) : (
            <div className="h-[50vh] flex items-center justify-center text-white/50">
              No projects found in this category.
            </div>
          )
        ) : (
          categoryData.map((category, index) => (
            <div 
              key={category.name} 
              className="h-screen sticky top-0 flex items-center justify-center pt-32 overflow-hidden"
            >
              <CategoryCard 
                index={index} 
                total={categoryData.length} 
                scrollYProgress={scrollYProgress} 
                category={category} 
                onClick={() => {
                  setActiveCategory(category.name);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>
          ))
        )}
      </div>
      
      {/* Footer */}
      <div className="h-[70vh] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-transparent to-[#050505]">
        <div className="z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
            Let's build together.
          </h2>
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition-transform duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </motion.div>
  );
}
