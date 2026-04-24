'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import styles from './Events.module.css';
import previewStyles from './Preview.module.css';
import EventModal, { type EvolvitEvent } from '../EventModal';

const events: EvolvitEvent[] = [
  {
    title: 'EvolArt',
    date: 'Feb 5, 2026',
    category: 'Inaugral event',
    description: 'Inaugural event of EvolVIT Club showcasing creativity and innovation.',
    extendedDescription: 'EVOLART marked the successful inauguration of the EvolVIT Club, proudly recognized as the 100th club of VIT Bhopal University. This event set the foundation for a journey that blends creativity with innovation. The event provided a vibrant platform for students to showcase their artistic talents through various forms such as digital design, sketching, and creative expression. Participants brought forward unique ideas with great enthusiasm, making the event both engaging and inspiring. As the inaugural event, EvolArt highlighted the club’s vision of fostering creativity, collaboration, and technological excellence.',
    color: '#7c3aed',
    emoji: '🤖',
    images: ['img1', 'img2', 'img3'],
  },
  {
    title: 'Industrial Visit',
    date: 'February 17, 2026',
    category: 'Industrial Visit',
    description: 'Industry exposure at Appointy — bridging academics with real-world tech.',
    extendedDescription: 'The Industrial Visit organized by EvolVIT Club provided students with real-world exposure to industry practices. Students gained insights into AI development, software engineering, and the operational workflows of a growing tech company. The session included interactive discussions and a Q&A segment, enhancing students’ understanding of the professional landscape.',
    color: '#a855f7',
    emoji: '⚡',
    images: ['img1', 'img2', 'img3', 'img4'],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function EventsPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedEvent, setSelectedEvent] = useState<EvolvitEvent | null>(null);

  return (
    <section className={styles.events} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Events &amp; <span className="gradient-text">Experiences</span>
          </h2>
          <p className="section-subtitle">
            From hackathons to workshops — we create learning experiences that leave a mark.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {events.map((event) => (
            <motion.article
              key={event.title}
              className={`${styles.card} glass-card`}
              variants={cardVariant}
              whileHover={{ y: -8 }}
            >
              <div className={styles.cardTop} style={{ background: `${event.color}18` }}>
                <span className={styles.cardEmoji}>{event.emoji}</span>
                <span
                  className={styles.cardCategory}
                  style={{ color: event.color, borderColor: `${event.color}40`, background: `${event.color}15` }}
                >
                  {event.category}
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardDate}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {event.date}
                </div>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <p className={styles.cardDesc}>{event.description}</p>
              </div>
              <div className={styles.cardFooter}>
                <button 
                  className={styles.learnMore}
                  onClick={() => setSelectedEvent(event)}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className={`${styles.cta} ${previewStyles.viewAllWrap}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Link href="/events" className={previewStyles.viewAllBtn}>
            View All Events
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
}
