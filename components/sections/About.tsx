'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import styles from './About.module.css';

const features = [
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'We push technology boundaries and explore cutting-edge domains from AI to Web3.',
    gradient: 'from-purple to-blue',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'A community where diverse minds come together to solve real-world problems.',
    gradient: 'from-blue to-cyan',
  },
  {
    icon: '📚',
    title: 'Learning',
    description: 'Continuous growth through workshops, mentorship, and hands-on experience.',
    gradient: 'from-cyan to-purple',
  },
  {
    icon: '⚡',
    title: 'Real Projects',
    description: 'We ship real-world solutions that make a difference — not just theory.',
    gradient: 'from-purple to-pink',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">
              More Than a Club —<br />
              <span className="gradient-text">A Movement</span>
            </h2>
            <p className={styles.description}>
              EvolVIT was born from a simple idea: To cultivate a community of innovative problem-solvers who are well-equipped to tackle complex, real-world challenges in the technology sector.. We&apos;re not
              about certificates — we&apos;re about creation.
            </p>
            <p className={styles.description} style={{ marginTop: 16 }}>
              To provide a unique, hands-on learning environment by sourcing and presenting industry-specific problem statements to students, thereby enabling them to gain practical experience, build a professional portfolio, and secure future career opportunities — EvolVIT is where engineers, designers, and
              thinkers evolve.
            </p>
            <div className={styles.pillGroup}>
              {['AI & ML', 'Web Dev', 'Real-World problem Solving', 'Hackathons'].map((p) => (
                <span key={p} className="tech-pill">{p}</span>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Cards */}
          <motion.div
            className={styles.cardGrid}
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {features.map((f) => (
              <motion.div key={f.title} className={`${styles.featureCard} glass-card`} variants={item} whileHover={{ y: -6, scale: 1.02 }}>
                <span className={styles.cardIcon}>{f.icon}</span>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
