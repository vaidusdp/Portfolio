import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Terminal, 
  ArrowUpRight, 
  Search, 
  Trophy 
} from 'lucide-react';
import profilePic from './assets/Profile.jpg';

const PROJECT_NAMES = [
  "Nexus", 
  "videoTube", 
  "React-Weather-App",
  "Queue-Management-System",
  "TaskForge",
  "Expenly-Expense-Tracker"
]; 

const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });
    
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  return [domRef, isVisible];
};


const FadeInSection = ({ children }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 border-b border-zinc-800/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-800">
            <img src={profilePic} alt="Vexor Profile" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">Vexor</span>
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          {['About', 'Stack', 'Projects', 'GitHub', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-200 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-start pt-32 pb-16 relative overflow-hidden">
      <div className="inline-flex items-center space-x-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono mb-8 rounded-md">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
        <span>Available for Opportunities</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase">
        Vexor / Vaidus
      </h1>
      
      <h2 className="text-xl md:text-2xl text-zinc-300 font-medium mb-6 tracking-tight">
        Frontend Developer
      </h2>
      
      <p className="max-w-xl text-zinc-400 text-sm md:text-base leading-relaxed mb-12">
        Frontend Developer with MERN Backend Capabilities, Python, and SQL skillsets. Designing robust interfaces and structuring reliable full-stack applications.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#projects" 
          className="px-6 py-3 bg-white text-zinc-950 text-xs font-bold rounded-md hover:bg-zinc-200 transition-colors flex items-center justify-center space-x-2"
        >
          <span>View Projects</span>
        </a>
        <div className="flex gap-2">
          <a href="https://github.com/vaidusdp" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 text-zinc-300 rounded-md border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors"><Github size={16} /></a>
          <a href="#github" className="p-3 bg-zinc-900 text-zinc-300 rounded-md border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors"><Trophy size={16} /></a>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 border-l-2 border-zinc-700 pl-6">
    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
    <p className="text-zinc-400 text-sm mt-2 max-w-xl font-light leading-relaxed">{subtitle}</p>
  </div>
);

const About = () => (
  <section id="about" className="py-24">
    <FadeInSection>
      <SectionHeader title="Professional Profile" subtitle="Fusing reliable architecture with high-quality frontend implementation." />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Description Column */}
        <div className="lg:col-span-2 p-8 bg-zinc-900/10 border border-zinc-800 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Engineering Focus</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              I am a Frontend Developer with MERN backend capabilities, Python, and SQL skillsets. My development focus is on building clean, intuitive, and highly interactive user interfaces that consume performant backend microservices.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              My programming philosophy leans heavily on standardizing layouts, using semantic HTML structures, minimizing state overhead, and integrating consistent database queries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-zinc-800/60">
            <div>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Primary Focus</span>
              <p className="text-zinc-200 text-xs font-mono mt-1">React, Zustand, Tailwind</p>
            </div>
            <div>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Data & Services</span>
              <p className="text-zinc-200 text-xs font-mono mt-1">Node.js, Express, Python, SQL</p>
            </div>
          </div>
        </div>

        {/* Right Links Column */}
        <div className="p-8 bg-zinc-900/10 border border-zinc-800 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Platforms</h3>
            <div className="space-y-4">
              {[
                { name: "LeetCode", info: "DSA Problem Solving", icon: <Terminal size={18}/>, url: "https://leetcode.com/u/vaizus" },
                { name: "GitHub", info: "@vaidusdp", icon: <Github size={18}/>, url: "https://github.com/vaidusdp" }
              ].map((item, i) => (
                <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-zinc-900/30 rounded-md border border-zinc-800 hover:bg-zinc-900/50 hover:border-zinc-700 transition-colors">
                  <div className="text-zinc-400">{item.icon}</div>
                  <div>
                    <h5 className="text-zinc-200 font-bold text-sm">{item.name}</h5>
                    <p className="text-zinc-500 text-xs mt-0.5">{item.info}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  </section>
);

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/vaidusdp/repos?sort=updated&per_page=50')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const selected = data.filter(repo => 
            PROJECT_NAMES.includes(repo.name)
          );
          setRepos(selected);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-24 border-t border-zinc-900">
      <FadeInSection>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader title="Open Source & Projects" subtitle="Selected engineering projects fetched directly from GitHub." />
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono px-4 py-2 bg-zinc-900/40 rounded-md border border-zinc-800 self-start md:self-auto">
            <Search size={12} className="opacity-50" />
            <span className="opacity-70">Filtered Selection</span>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-zinc-800 border-t-zinc-400 rounded-full animate-spin"></div>
          </div>
        ) : repos.length === 0 ? (
          <div className="p-16 text-center border border-dashed border-zinc-800 rounded-lg text-zinc-600 italic text-sm">
            Awaiting repository selection...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a 
                key={repo.id} 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-6 bg-zinc-900/10 border border-zinc-800 rounded-lg flex flex-col justify-between hover:bg-zinc-900/30 hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 bg-zinc-900/50 rounded-md flex items-center justify-center text-zinc-400 border border-zinc-800 group-hover:text-white transition-colors">
                      <Code2 size={20} />
                    </div>
                    <ArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors" size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-zinc-200 transition-colors">{repo.name}</h3>
                  <p className="text-zinc-400 text-xs line-clamp-3 mb-6 font-normal leading-relaxed">
                    {repo.description || "Production-focused logic implementation with clean code principles."}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-zinc-500 border-t border-zinc-900/85 pt-4 mt-auto">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-500"></span>
                    {repo.language || "JavaScript"}
                  </span>
                  <span>⭐ {repo.stargazers_count}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </FadeInSection>
    </section>
  );
};

const TechStack = () => {
  const stack = {
    Frontend: ["React", "Tailwind CSS", "Zustand", "HTML/CSS"],
    Backend: ["Node.js", "Express", "MERN Stack"],
    Languages: ["JavaScript", "Python", "Java", "C++", "SQL"],
    Systems: ["Git", "GitHub", "AI Workflows", "Database Management"]
  };

  return (
    <section id="stack" className="py-24 border-t border-zinc-900">
      <FadeInSection>
        <SectionHeader title="Technical Capabilities" subtitle="A structured view of my engineering toolkit and core proficiencies." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(stack).map(([category, items]) => (
            <div key={category} className="p-6 bg-zinc-900/10 border border-zinc-800 rounded-lg">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span key={item} className="px-3 py-1.5 bg-zinc-900/40 border border-zinc-800 text-zinc-300 text-xs font-mono rounded-md">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

const GitHubSection = () => (
  <section id="github" className="py-24 border-t border-zinc-900">
    <FadeInSection>
      <SectionHeader title="GitHub Contributions" subtitle="A breakdown of my open source contributions and active language statistics." />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wrap Stats Card in Anchor Tag */}
        <a 
          href="https://github.com/vaidusdp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="lg:col-span-2 bg-zinc-900/10 border border-zinc-800 rounded-lg p-6 flex items-center justify-center hover:bg-zinc-900/20 hover:border-zinc-700 transition-all group"
        >
          <img 
            src="https://github-readme-stats-eight-theta.vercel.app/api?username=vaidusdp&show_icons=true&theme=transparent&title_color=ffffff&text_color=a1a1aa&icon_color=ffffff&bg_color=00000000&hide_border=true" 
            alt="Stats" 
            className="w-full max-w-lg h-auto opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </a>

        {/* Wrap Top Languages Card in Anchor Tag */}
        <a 
          href="https://github.com/vaidusdp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-zinc-900/10 border border-zinc-800 rounded-lg p-6 flex items-center justify-center hover:bg-zinc-900/20 hover:border-zinc-700 transition-all group"
        >
          <img 
            src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=vaidusdp&layout=compact&theme=transparent&title_color=ffffff&text_color=a1a1aa&bg_color=00000000&hide_border=true" 
            alt="Langs" 
            className="w-full max-w-xs h-auto opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </a>
      </div>

      {/* Contribution Matrix Card */}
      <div className="mt-6 bg-zinc-900/10 border border-zinc-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Contribution Matrix</h3>
          <a href="https://github.com/vaidusdp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-xs font-semibold">
            @vaidusdp <ArrowUpRight size={14} />
          </a>
        </div>
        
        {/* Wrap Matrix Image in Anchor Tag */}
        <a 
          href="https://github.com/vaidusdp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block overflow-x-auto border border-transparent hover:border-zinc-800 rounded transition-all group"
        >
          <img 
            src="https://ghchart.rshah.org/3b82f6/vaidusdp" 
            alt="Contributions" 
            className="min-w-[600px] w-full h-auto opacity-80 invert hue-rotate-180 brightness-150 group-hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      </div>
    </FadeInSection>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 border-t border-zinc-900">
    <FadeInSection>
      <div className="p-8 md:p-16 bg-zinc-900/10 border border-zinc-800 rounded-lg text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 uppercase tracking-tight">Let's Collaborate</h2>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Open for engineering roles, technical collaboration, and full-stack solutions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: Mail, label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vaidusdp@gmail.com' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaidus-tech-16460b378/' },
            { icon: Github, label: 'GitHub', href: 'https://github.com/vaidusdp' },
            { icon: Terminal, label: 'LeetCode', href: 'https://leetcode.com/u/vaizus' }
          ].map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono rounded-md hover:bg-zinc-800 hover:text-white transition-colors"
            >
              <link.icon size={14} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </FadeInSection>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-zinc-900 bg-zinc-950">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-[10px] tracking-wider uppercase font-bold">
      <div className="mb-4 md:mb-0 opacity-80">
        © {new Date().getFullYear()} Vexor Systems. All rights reserved.
      </div>
      <div className="flex items-center gap-2 opacity-85">
        Frontend Engineering Portfolio
      </div>
    </div>
  </footer>
);

// --- App Shell ---

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-300 selection:bg-zinc-800 selection:text-white font-sans antialiased">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: #09090b;
          overflow-x: hidden;
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #09090b;
        }
        ::-webkit-scrollbar-thumb {
          background: #27272a;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #3f3f46;
        }
      `}</style>
      
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 relative">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <GitHubSection />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}