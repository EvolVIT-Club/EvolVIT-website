'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Role-Based Management System',
    description: 'A comprehensive role-based management system for an organization.',
    tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express' , 'MongoDB'],
    github: 'https://github.com/EvolVIT-Club/Quantumard-Project-Management-System',
    live: 'https://quantumard-project-management-syste.vercel.app/',
    color: '#7c3aed',
  },
  {
    title: 'Nexus AI',
    description: 'Nexus AI is a smart AI-powered platform that helps users with chatting, coding, problem-solving, and content creation through a fast and user-friendly interface.',
    tech: ['React', 'SpecKit',],
    github: 'https://github.com/Ayush07571/Nexus-AI-Speckit-development.git',
    live: 'https://nexus-ai-lilac.vercel.app/',
    color: '#059669',
  },
  {
    title: 'TraceIt',
    description: 'TraceIt is a web platform designed to help users track and manage items efficiently, making it easier to locate lost belongings or organize important assets through a simple and intuitive interface..',
    tech: ['React','Next.js', 'SpecKit', 'Authentication'],
    github: 'https://github.com/Parth-Gholap/Trace-IT.git',
    live: 'https://trace-it-ten.vercel.app/',
    color: '#3b82f6',
  },
  {
    title: 'SmartCity AI',
    description: 'Smart City is a digital platform that monitors and manages urban systems like traffic, pollution, energy, and public services in real time, helping improve efficiency and quality of life. ',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Authentication'],
    github: 'https://github.com/AbhiralJain07/Smart-city.git',
    live: 'https://smart-city-black.vercel.app/',
    color: '#ef4444',
  },
  // {
  //   title: 'CodeCollab',
  //   description: 'Real-time collaborative code editor with integrated AI code completion.',
  //   tech: ['Vue.js', 'WebSocket', 'OpenAI', 'Redis'],
  //   github: '#',
  //   live: '#',
  //   color: '#f59e0b',
  // },
  // {
  //   title: 'BlockVault',
  //   description: 'Decentralized document verification system on Ethereum for academic credentials.',
  //   tech: ['Solidity', 'Web3.js', 'IPFS', 'React'],
  //   github: '#',
  //   live: '#',
  //   color: '#a855f7',
  // },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};


export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className={styles.projects} ref={ref}>
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
            <motion.div
              key={project.title}
              className={`${styles.card} glass-card`}
              variants={cardVar}
              whileHover="hover"
              initial="rest"
            >
              {/* Color bar */}
              <div className={styles.colorBar} style={{ background: project.color }} />

              <div className={styles.cardBody}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>

                <div className={styles.techList}>
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className={styles.overlay}
                variants={{
                  rest: { opacity: 0, y: 20 },
                  hover: { opacity: 1, y: 0, transition: { duration: 0.25 } },
                }}
              >
                <a href={project.github} className={styles.overlayBtn}>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a href={project.live} className={`${styles.overlayBtn} ${styles.overlayBtnPrimary}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
