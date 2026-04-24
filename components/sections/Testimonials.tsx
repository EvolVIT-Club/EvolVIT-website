'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "EvolVIT completely changed how I think about building things. I went from knowing nothing about ML to shipping a working AI project in 3 months.",
    name: "Karan Joshi",
    role: "ML Engineer at Google",
    year: "EvolVIT Alum '23",
    initial: "K",
  },
  {
    quote: "The community here is unlike any other. You're surrounded by people who genuinely want to build, not just talk about building. That energy is contagious.",
    name: "Meena Sundaram",
    role: "SDE at Flipkart",
    year: "EvolVIT Alum '23",
    initial: "M",
  },
  {
    quote: "HackEvol was the best experience of my college life. The things I learned in 24 hours were worth more than a semester of classes.",
    name: "Ayush Thakur",
    role: "Startup Founder",
    year: "EvolVIT Member '24",
    initial: "A",
  },
  {
    quote: "EvolVIT's open source program got me my first real GitHub contributions and helped me land my internship. Forever grateful.",
    name: "Pooja Krishnamurthy",
    role: "Intern at Microsoft",
    year: "EvolVIT Member '25",
    initial: "P",
  },
];

const gradients = [
  'linear-gradient(135deg, #7c3aed, #a855f7)',
  'linear-gradient(135deg, #3b82f6, #06b6d4)',
  'linear-gradient(135deg, #f59e0b, #ef4444)',
  'linear-gradient(135deg, #059669, #06b6d4)',
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section id="testimonials" className={styles.testimonials} ref={ref}>
      <div className={styles.bgGlow} />
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Voices</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Members Say</span>
          </h2>
        </motion.div>

        <motion.div
          className={styles.sliderWrap}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={styles.quote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className={styles.quoteIcon}>&ldquo;</div>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.authorAvatar} style={{ background: gradients[active % gradients.length] }}>
                  {t.initial}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{t.name}</span>
                  <span className={styles.authorRole}>{t.role} · {t.year}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className={styles.controls}>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className={styles.arrows}>
              <button className={styles.arrow} onClick={prev} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button className={styles.arrow} onClick={next} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
