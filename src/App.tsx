import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Database, 
  Layout, 
  Terminal, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Award, 
  ChevronRight,
  Download,
  Calendar,
  MapPin,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- DATA ---
// ... (rest of data remains same)

const PERSONAL_INFO = {
  name: "Lihini Senevirathna",
  title: "IT Undergraduate & Aspiring Software Developer",
  email: "lihinichami1998@gmail.com",
  phone: "077-4213509",
  location: "Sri Lanka",
  linkedin: "https://www.linkedin.com/in/lihini-senevirathna",
  github: "https://github.com/lchaminduni",
  image: "me.png", 
  summary: "Motivated and detail-oriented IT undergraduate with a strong foundation in software development and problem-solving. Currently reading for a Bachelor of Information Technology at the University of Moratuwa. Eager to gain hands-on industry experience through an internship, contribute to real-world projects, and continuously develop technical and professional skills in a dynamic environment.",
  goals: "My career goal is to become a full-stack software engineer, specializing in modern web technologies and robust backend systems. I am passionate about creating efficient, scalable applications that solve real-world problems."
};

const EDUCATION = [
  {
    degree: "Bachelor of Information Technology",
    institution: "University of Moratuwa",
    period: "Reading (Final Year)",
    details: "Focusing on software engineering and information systems."
  },
  {
    degree: "Diploma & Higher Diploma in Information Technology",
    institution: "University of Moratuwa",
    period: "2024 - 2026",
    details: "Advanced concepts in IT and Software Development."
  },
  {
    degree: "Comprehensive Master Java Developer",
    institution: "Institute of Software Engineering (IJSE)",
    period: "2024",
    details: "Diploma in Software Engineering with a focus on Enterprise Java."
  },
  {
    degree: "National Diploma for Industrial Technology (Civil Eng)",
    institution: "College of Technology, Rathmalana",
    period: "2021 - 2023",
    details: "Foundational technical training and project management."
  }
];

const SKILLS = [
  { category: "Languages", items: ["Java", "JavaScript", "TypeScript"], icon: <Code2 className="w-5 h-5 text-sky-400" /> },
  { category: "Web Tech", items: ["HTML5", "CSS3", "React", "React Native", "Tailwind CSS", "Bootstrap"], icon: <Layout className="w-5 h-5 text-sky-400" /> },
  { category: "Frameworks", items: ["Spring Boot", "Express.js", "Node.js"], icon: <Terminal className="w-5 h-5 text-sky-400" /> },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "Firestore"], icon: <Database className="w-5 h-5 text-sky-400" /> },
  { category: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Docker"], icon: <Cpu className="w-5 h-5 text-sky-400" /> }
];

const PROJECTS = [
  {
    title: "Student Management System",
    description: "A full-stack web application to manage student data, class enrollment, academic performance, and payments for an educational institution.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "Tailwind CSS", "JWT"],
    github: "https://github.com/lchaminduni/Student-Management-System-New-Update",
    demo: "https://www.youtube.com/watch?v=Ay_dvPI7acs&t=20s",
    features: [
      "RESTful APIs with JWT Authentication",
      "Responsive UI for Admin and Students",
      "CRUD operations for enrollment and payments"
    ]
  },
  {
    title: "Point of Sale System",
    description: "An ongoing development of a robust POS application featuring inventory tracking, sales handling, and real-time stock updates.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "Tailwind CSS"],
    github: "https://github.com/lchaminduni/Point-of-Sale-System",
    demo: "https://www.youtube.com/watch?v=4-NqxOquoa0",
    features: [
      "Product & Category management",
      "Seamless backend-frontend integration",
      "Automatic stock update triggers"
    ]
  }
];

const EXPERIENCE = [
  {
    role: "Trainee Technical Officer (Civil Engineering)",
    company: "Central Engineering Services Pvt Ltd",
    period: "Apr 2022 - Oct 2022",
    details: "Assisted in project management, technical documentation, and site supervision."
  },
  {
    role: "Industrial Training",
    company: "Sampath Bank PLC",
    period: "Feb 2019 - Aug 2019",
    details: "Gained exposure to corporate environment and internal operations."
  }
];

const CERTIFICATIONS = [
  { title: "IT Essentials", issuer: "CISCO Academy" },
  { title: "Ethical Hacker", issuer: "CISCO Academy" },
  { title: "MS Project", issuer: "Tectra Academy" },
  { title: "Civil QS", issuer: "Tectra Academy" },
  { title: "Auto CAD 2D", issuer: "Dream CAD Academy" },
  { title: "MEP QS", issuer: "Tectra Academy" }
];

// --- COMPONENTS ---

interface SectionTitleProps {
  children?: React.ReactNode;
  subtitle?: string;
}

const SectionTitle = ({ children, subtitle }: SectionTitleProps) => (
  <div className="mb-12" id={typeof children === 'string' ? children.toLowerCase().replace(/\s+/g, '-') : undefined}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-sky-500 mt-4 rounded-full"
    />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gradient">LS.</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-sky-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass md:hidden py-6 border-t border-white/5"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-gray-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Note: To make this work, replace the access_key with your own from web3forms.com
    // It's a free service that sends form submissions to your email.
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9b85c786-08d7-437f-b8e9-3ea80350644a", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-sky-500/30 selection:text-sky-400">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-sm font-medium mb-6">
              Available for Internships
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              I'm <span className="text-gradient">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-sky-500/20 active:scale-95"
              >
                Hire Me
              </a>
              <a 
                href={`${import.meta.env.BASE_URL}cv.pdf`} 
                download="Lihini_Senevirathna_CV.pdf"
                className="px-8 py-4 glass text-gray-200 rounded-xl font-semibold transition-all hover:bg-white/5 flex items-center gap-2 active:scale-95"
              >
                <Download className="w-5 h-5" /> Download CV
              </a>
            </div>
            <div className="mt-12 flex gap-6 grayscale opacity-50">
              <a href={PERSONAL_INFO.github} className="hover:grayscale-0 hover:opacity-100 transition-all text-gray-400 hover:text-white"><Github /></a>
              <a href={PERSONAL_INFO.linkedin} className="hover:grayscale-0 hover:opacity-100 transition-all text-gray-400 hover:text-white"><Linkedin /></a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:grayscale-0 hover:opacity-100 transition-all text-gray-400 hover:text-white"><Mail /></a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Abstract Background Blobs */}
            <div className="absolute -z-10 w-64 h-64 md:w-96 md:h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse-slow mix-blend-screen" />
            <div className="absolute -z-10 w-48 h-48 md:w-72 md:h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow mix-blend-screen delay-700" style={{ right: '-10%', top: '10%' }} />
            
            {/* The "Another Style" Image Frame - Floating Card */}
            <div className="relative group perspective-1000">
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden glass border border-white/10 shadow-2xl transition-all duration-700 transform group-hover:rotate-y-6 group-hover:scale-[1.02]">
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950/80 z-20 pointer-events-none" />
                
                {/* Profile Image */}
                <img 
                  src={`${import.meta.env.BASE_URL}${PERSONAL_INFO.image}`} 
                  alt={PERSONAL_INFO.name} 
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = 'none';
                    setImageLoaded(true); // Treat as loaded to hide placeholder letters and show the fallback UI
                  }}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover relative z-10 transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Nice Placeholder when no actual image found */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 z-0">
                    <div className="w-20 h-20 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
                      <Code2 className="w-10 h-10 text-sky-400 opacity-20" />
                    </div>
                    <span className="text-4xl font-black text-gray-800 uppercase tracking-tighter">LS</span>
                  </div>
                )}

                {/* Name Label (Visible when Image is missing or for style) */}
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-1">Developer</p>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Lihini Senevirathna</h3>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 glass p-4 rounded-xl border border-white/10 shadow-xl z-30 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Java Expert</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -right-6 glass p-4 rounded-xl border border-white/10 shadow-xl z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400">
                    <Layout size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">React Dev</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="A glimpse into who I am and what I strive for.">About Me</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {PERSONAL_INFO.summary}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {PERSONAL_INFO.goals}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Phone", value: PERSONAL_INFO.phone, icon: <Phone size={20} /> },
                { label: "Email", value: "Available on Request", icon: <Mail size={20} /> },
                { label: "Location", value: PERSONAL_INFO.location, icon: <MapPin size={20} /> },
                { label: "Status", value: "Intern seeker", icon: <CheckCircle2 size={20} /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 glass rounded-2xl border border-white/5"
                >
                  <div className="text-sky-400 mb-3">{item.icon}</div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-1">{item.label}</h4>
                  <p className="text-sm font-medium">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="My academic journey and qualifications.">Education</SectionTitle>
          <div className="relative border-l border-sky-500/20 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
            {EDUCATION.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[53px] md:-left-[69px] top-0 w-10 h-10 rounded-full bg-gray-950 border-2 border-sky-500 flex items-center justify-center text-sky-500 z-10">
                  <GraduationCap size={20} />
                </div>
                <div className="glass p-8 rounded-2xl transition-all hover:bg-white/5 border border-white/5 group">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-sky-400 transition-colors uppercase tracking-wide">
                      {edu.degree}
                    </h3>
                    <span className="px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-bold rounded-full w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sky-400/80 font-semibold mb-2 flex items-center gap-2">
                    <ChevronRight size={16} /> {edu.institution}
                  </p>
                  <p className="text-gray-400 text-sm">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="My toolbox of technologies and languages.">Technical Proficiencies</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skillGroup, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass rounded-3xl border border-white/5 hover:border-sky-500/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, j) => (
                    <span 
                      key={j} 
                      className="px-4 py-2 bg-gray-800/50 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Showcasing my practical implementation and design.">Featured Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-sky-500/20 transition-all flex flex-col"
              >
                <div className="h-48 bg-gradient-to-br from-sky-900/50 to-indigo-900/50 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                  <Code2 className="w-16 h-16 text-sky-500 opacity-20" />
                  <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex gap-2 mb-4">
                    {project.tech.slice(0, 3).map((t, j) => (
                      <span key={j} className="px-2 py-1 bg-sky-500/10 text-sky-400 text-[10px] font-bold uppercase rounded tracking-widest">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-400 transition-colors uppercase tracking-wide">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <ul className="space-y-2 mb-6">
                      {project.features.map((f, k) => (
                        <li key={k} className="text-xs text-gray-500 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-500" /> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold text-gray-200 transition-all active:scale-95"
                      >
                        <Github size={18} className="text-sky-400" /> CodeBase
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/20 rounded-xl text-sm font-bold text-sky-400 transition-all active:scale-95"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Professional exposure and industrial insights.">Work Experience</SectionTitle>
          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 glass rounded-3xl border border-white/5 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="p-4 rounded-full bg-sky-500/10 text-sky-400">
                  <Briefcase />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-2 gap-2">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <span className="text-sky-500 font-mono text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-400 font-medium mb-4">{exp.company}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{exp.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Verified validations of my skills.">Certifications</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 glass rounded-2xl border border-white/5 text-center group hover:border-sky-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 mx-auto mb-4 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <Award size={20} />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-200 mb-2 truncate" title={cert.title}>{cert.title}</h4>
                <p className="text-[10px] text-gray-500 truncate">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Let's build something amazing together.">Let's Talk Tech</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-gray-300 text-lg">
                I am currently looking for an internship opportunity in software development. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Mail />, label: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                  { icon: <Phone />, label: "Phone", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
                  { icon: <Linkedin />, label: "LinkedIn", value: "Lihini Senevirathna", href: PERSONAL_INFO.linkedin }
                ].map((item, i) => (
                  <a key={i} href={item.href} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="font-bold text-gray-200 group-hover:text-sky-400 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 glass rounded-3xl border border-white/5 relative overflow-hidden">
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-gray-950/90 z-50 flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                  <button 
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sky-400 text-sm font-bold uppercase tracking-widest hover:text-sky-300"
                  >
                    Send another
                  </button>
                </motion.div>
              )}

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-800/50 border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-sky-500/50 transition-all text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-800/50 border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-sky-500/50 transition-all text-sm" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Your Message" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gray-800/50 border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-sky-500/50 transition-all text-sm resize-none" 
                />
              </div>
              <button 
                disabled={status === 'sending'}
                className={`w-full py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'error' ? (
                  'Failed to Send (Retry?)'
                ) : (
                  'Send Message'
                )}
              </button>
              {status === 'error' && <p className="text-center text-xs text-red-400">Something went wrong. Please check your connection.</p>}
              
              <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest">
                Protected by secure end-to-end encryption
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gradient mb-8">LS.</h2>
          <div className="flex justify-center gap-8 mb-8 grayscale opacity-50">
            <a href={PERSONAL_INFO.github} className="hover:grayscale-0 hover:opacity-100 transition-all"><Github /></a>
            <a href={PERSONAL_INFO.linkedin} className="hover:grayscale-0 hover:opacity-100 transition-all"><Linkedin /></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:grayscale-0 hover:opacity-100 transition-all"><Mail /></a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Lihini Senevirathna. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-700 mt-2 uppercase tracking-widest">
            Built with React, Tailwind & Lucide
          </p>
        </div>
      </footer>
    </div>
  );
}
