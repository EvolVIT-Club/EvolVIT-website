'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Stats.module.css';

function useCountUp(target: number, duration: number, active: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

const stats = [
  { value: 500, suffix: '+', label: 'Active Members', desc: 'Students engaged across domains' },
  { value: 50, suffix: '+', label: 'Events Conducted', desc: 'Workshops, talks & hackathons' },
  { value: 30, suffix: '+', label: 'Projects Built', desc: 'Real products shipped to production' },
  { value: 15, suffix: '+', label: 'Industry Partners', desc: 'Companies we collaborate with' },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="stats" className={styles.stats} ref={ref}>
      {/* Background glow */}
      <div className={styles.bgGlow} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Impact</span>
          <h2 className="section-title">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, active }: { stat: typeof stats[0]; index: number; active: boolean }) {
  const count = useCountUp(stat.value, 1800, active);

  return (
    <motion.div
      className={`${styles.statCard} glass-card`}
      initial={{ opacity: 0, y: 40 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <div className={styles.statNumber}>
        {count}
        <span className={styles.suffix}>{stat.suffix}</span>
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
      <div className={styles.statDesc}>{stat.desc}</div>
    </motion.div>
  );
}
