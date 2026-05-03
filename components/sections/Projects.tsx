'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Role-Based Management System',
    description: 'A comprehensive role-based management system for an organization.',
    tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/EvolVIT-Club/Quantumard-Project-Management-System',
    live: 'https://quantumard-project-management-syste.vercel.app/',
    color: '#7c3aed',
  },
  {
    title: 'Nexus AI',
    description: 'Nexus AI is a smart AI-powered platform that helps users with chatting, coding, problem-solving, and content creation through a fast and user-friendly interface.',
    tech: ['React', 'SpecKit'],
    github: 'https://github.com/Ayush07571/Nexus-AI-Speckit-development.git',
    live: 'https://nexus-ai-lilac.vercel.app/',
    color: '#059669',
  },
  {
    title: 'TraceIt',
    description: 'TraceIt is a web platform designed to help users track and manage items efficiently, making it easier to locate lost belongings or organize important assets.',
    tech: ['React', 'Next.js', 'SpecKit', 'Auth'],
    github: 'https://github.com/Parth-Gholap/Trace-IT.git',
    live: 'https://trace-it-ten.vercel.app/',
    color: '#3b82f6',
  },
  {
    title: 'SmartCity AI',
    description: 'Smart City is a digital platform that monitors and manages urban systems like traffic, pollution, energy, and public services in real time, helping improve efficiency.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Auth'],
    github: 'https://github.com/AbhiralJain07/Smart-city.git',
    live: 'https://smart-city-black.vercel.app/',
    color: '#ef4444',
  },
];

/* ── Corner Accent ───────────────────────────────────────────────── */
function CornerAccent({ color, position }: { color: string; position: 'tl' | 'tr' | 'bl' | 'br' }) {
  let classes = styles.cornerAccent;
  if (position === 'tl') classes += ` ${styles.cornerTL}`;
  if (position === 'tr') classes += ` ${styles.cornerTR}`;
  if (position === 'bl') classes += ` ${styles.cornerBL}`;
  if (position === 'br') classes += ` ${styles.cornerBR}`;

  const isTop = position.includes('t');
  const isLeft = position.includes('l');
  
  const cx = isLeft ? 1 : 23;
  const cy = isTop ? 1 : 23;

  const pathD = isTop
    ? isLeft ? "M1 12 L1 1 L12 1" : "M23 12 L23 1 L12 1"
    : isLeft ? "M1 12 L1 23 L12 23" : "M23 12 L23 23 L12 23";

  return (
    <svg className={classes} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={pathD} stroke={color} strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx={cx} cy={cy} r="2" fill={color} fillOpacity="0.85" />
    </svg>
  );
}

/* ── Framer Motion Variants ──────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

/* ── Project Card ────────────────────────────────────────────────── */
function ProjectCard({ project }: { project: typeof projects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0) scale(1)';
  };

  return (
    <motion.div
      className={styles.cardWrapper}
      variants={cardVar}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      {/* Ambient glow */}
      <div className={styles.cardGlow} style={{ background: `radial-gradient(circle, ${project.color}55, transparent 70%)` }} />

      {/* Spinning gradient border */}
      <div className={styles.cardBorderGlow} />

      <motion.article 
        className={styles.card}
        initial="rest"
        whileHover="hover"
      >
        {/* Tech Circuit Overlay */}
        <div className={styles.circuitOverlay} />

        {/* Top Scan Line */}
        <motion.div
          className={styles.scanLine}
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
          initial={{ opacity: 0, x: '-100%' }}
          whileHover={{ opacity: 1, x: '100%', transition: { repeat: Infinity, duration: 1.5, ease: 'linear' } }}
        />

        {/* Corner Accents */}
        <CornerAccent color={project.color} position="tl" />
        <CornerAccent color={project.color} position="tr" />

        {/* Top Color Indicator Line */}
        <div className={styles.colorBar} style={{ background: project.color, boxShadow: `0 0 16px ${project.color}80` }} />

        <div className={styles.cardBody}>
          <div className={styles.cardHeader}>
            <div className={styles.projectIcon} style={{ color: project.color, background: `${project.color}15`, borderColor: `${project.color}30` }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className={styles.title}>{project.title}</h3>
          </div>
          
          <p className={styles.desc}>{project.description}</p>

          <div className={styles.techList}>
            {project.tech.map((t) => (
              <span key={t} className={styles.techPill}>{t}</span>
            ))}
          </div>
        </div>

        {/* Hover Overlay with Buttons */}
        <motion.div
          className={styles.overlay}
          variants={{
            rest: { opacity: 0, y: 15 },
            hover: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
        >
          <a href={project.github} className={styles.overlayBtn} target="_blank" rel="noopener noreferrer">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href={project.live} className={`${styles.overlayBtn} ${styles.overlayBtnPrimary}`} style={{ background: `linear-gradient(135deg, ${project.color}99, ${project.color})`, borderColor: `${project.color}80` }} target="_blank" rel="noopener noreferrer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        </motion.div>
      </motion.article>
    </motion.div>
  );
}

/* ── Projects Section ────────────────────────────────────────────── */
export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      {/* Background decorations */}
      <div className={styles.gridBg} />
      <div className={styles.noiseOverlay} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">What We Build</span>
          <h2 className="section-title">
            Projects That <span className="gradient-text">Ship</span>
          </h2>
          <p className="section-subtitle">
            Real products built by real students — from concept to deployment.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
