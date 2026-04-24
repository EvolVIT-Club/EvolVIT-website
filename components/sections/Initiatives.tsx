'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Initiatives.module.css';

const initiatives = [
  {
    icon: '🎯',
    title: 'EvolVIT X Datatrack',
    tagline: 'Internship',
    description: 'A 12-week intensive program where you will learn and work on real-world projects and get mentorship from industry experts.',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)',
  },
  {
    icon: '🎯',
    title: 'EvolVIT X Quantamard',
    tagline: 'Internship',
    description: 'A 4-week program where you will work on real-world projects from industry.',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
  },
  // {
  //   icon: '🧑‍💻',
  //   title: 'Code & Learn',
  //   tagline: 'Workshop Series',
  //   description: 'Weekly hands-on workshops on trending topics — from LLM fine-tuning to System Design to Web3 development.',
  //   gradient: 'linear-gradient(135deg, #059669 0%, #06b6d4 100%)',
  // },
  // {
  //   icon: '🎯',
  //   title: 'Placement Prep',
  //   tagline: 'Mentorship Program',
  //   description: 'DSA bootcamps, mock interviews, and resume reviews with alumni at top tech companies.',
  //   gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  // },
];

export default function Initiatives() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="initiatives" className={styles.initiatives} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Programs</span>
          <h2 className="section-title">
            Our <span className="gradient-text">Initiatives</span>
          </h2>
          <p className="section-subtitle">
            Structured programs designed to accelerate your growth as a developer.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={styles.cardBg} style={{ background: item.gradient }} />
              <div className={styles.cardContent}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.tagline}>{item.tagline}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.description}</p>
                <a href="#" className={styles.link}>
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
