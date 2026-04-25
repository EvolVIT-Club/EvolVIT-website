'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import styles from './Events.module.css';
import EventModal, { type EvolvitEvent } from '../EventModal';

const pastEvents: EvolvitEvent[] = [
  {
    title: 'EvolART',
    date: 'February 05, 2026',
    category: 'Inaugral Event',
    description: 'EvolVIT — VIT Bhopal’s 100th Official Club — is here to spark innovation & creativity across campus! 💡 And we’re celebrating our grand launch with 🎨 EvolART— The Ultimate Poster Design Competition!',
    extendedDescription: 'EVOLART marked the successful inauguration of the EvolVIT Club, proudly recognized as the 100th club of VIT Bhopal University. This event set the foundation for a journey that blends creativity with innovation.The event provided a vibrant platform for students to showcase their artistic talents through various forms such as digital design, sketching, and creative expression.Participants brought forward unique ideas with great enthusiasm, making the event both engaging and inspiring. As the inaugural event, EVOLART highlighted the club’s vision of fostering creativity, collaboration, and technological excellence.',
    color: '#7c3aed',
    emoji: '🤖',
    images: ['img1.jpeg', 'img2.jpeg'],
  },
  {
    title: 'Ideathon',
    date: 'February 13-14, 2026',
    category: 'Ideathon',
    description: 'Idea to Industry’26 — turning innovative ideas into real-world solutions.',
    extendedDescription: 'IDEATHON – IDEA TO INDUSTRY’26 was an innovative event organized by the EvolVIT Club, aimed at transforming creative ideas into practical, real-world solutions.Participants showcased their problem-solving abilities by presenting unique and impactful concepts, focusing on innovation, feasibility, and real-world applications. The event encouraged critical thinking, collaboration, and an entrepreneurial mindset among students.\n\nIDEATHON successfully bridged the gap between ideas and industry-driven solutions, reflecting EvolVIT’s vision of fostering innovation and technological growth. 🚀 ',
    color: '#a855f7',
    emoji: '⚡',
    // images: ['img1.jpg', 'img2', 'img3', 'img4'],
  },
  {
    title: 'Industrial Visit',
    date: 'February 17, 2026  ',
    category: 'Industrial Visit',
    description: 'Industry exposure at Appointy — bridging academics with real-world tech.',
    extendedDescription: 'The Industrial Visit organized by EvolVIT Club provided students with real-world exposure to industry practices.\n\nParticipants gained insights into AI workflows, team collaboration, and the practical application of technical skills in a professional environment. The visit enhanced students’ understanding of industry expectations and inspired them to pursue excellence in their academic and professional journeys.',
    color: '#3b82f6',
    emoji: '🔧',
    images: ['img4.jpg', 'img5.jpg'],
  },
  {
    title: 'Orientation Program',
    date: 'April 16, 2026',
    category: 'Orientation',
    description: 'Youth as Game changers for Viksit Bharat - Role from 2026 to 2047',
    extendedDescription: 'Brigadier Rajneesh Gaur, an alumnus of the prestigious National Defence Academy (NDA) and a distinguished veteran of the Indian Army, graced the occasion as the esteemed Chief Guest. His illustrious career, marked by valor and leadership, provided a beacon of inspiration for the young minds present. Brigadier Gaur’s address centered on the pivotal role of youth in shaping the trajectory of a developed India, emphasizing the critical period from 2026 to 2047. He eloquently articulated how the youth, armed with innovation, determination, and a commitment to excellence, are the driving force behind the nation’s transformation. His insights resonated deeply with the audience, encouraging them to embrace their potential as catalysts of change and to contribute meaningfully to India’s journey towards becoming a global leader.',
    color: '#06b6d4',
    emoji: '📊',
    images: ['img6.jpg', 'img7.jpg', 'img8.jpg'],
  },
];

const upcomingEvents: EvolvitEvent[] = [
  {
    title: 'HackEvol 1.0',
    date: 'TBA',
    category: 'Upcoming Hackathon',
    description: 'Get ready for the biggest 48-hour hackathon of the year.',
    extendedDescription: 'We are gearing up for HackEvol 1.0! Stay tuned for more updates, themes, and prize pool announcements. Prepare your teams for an extraordinary 48 hours of building solutions that matter.',
    color: '#f59e0b',
    emoji: '🚀',
    images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop'],
  }
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const EventCard = ({ event, onSelect }: { event: EvolvitEvent; onSelect: (e: EvolvitEvent) => void }) => (
  <motion.div
    className={styles.cardWrapper}
    variants={cardVariant}
    whileHover="hover"
    initial="initial"
    onClick={() => onSelect(event)}
  >
    {/* Animated glowing background */}
    <motion.div
      className={styles.cardGlow}
      style={{ background: event.color }}
      variants={{
        initial: { opacity: 0, scale: 0.95 },
        hover: { opacity: 0.2, scale: 1.02 },
      }}
      transition={{ duration: 0.3 }}
    />

    <article className={`${styles.card} glass-card`}>
      {/* Top Header */}
      <div className={styles.cardTop} style={{ background: `linear-gradient(180deg, ${event.color}08 0%, transparent 100%)` }}>
        <div className={styles.categoryBadge} style={{ color: event.color, borderColor: `${event.color}40`, background: `${event.color}10` }}>
          <span className={styles.glowDot} style={{ background: event.color, boxShadow: `0 0 10px ${event.color}` }} />
          {event.category}
        </div>
        <span className={styles.cardEmoji}>{event.emoji}</span>
      </div>

      {/* Card Body */}
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

      {/* Footer Interface */}
      <div className={styles.cardFooter}>
        <span className={styles.learnMore} style={{ color: event.color }}>
          Explore Details
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>

      {/* Scanning Laser Line */}
      <motion.div
        className={styles.cardHighlight}
        style={{ background: `linear-gradient(90deg, transparent, ${event.color}, transparent)` }}
        variants={{
          initial: { opacity: 0, x: '-100%' },
          hover: { opacity: 1, x: '100%', transition: { repeat: Infinity, duration: 1.5, ease: 'linear' } }
        }}
      />
    </article>
  </motion.div>
);

export default function Events() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedEvent, setSelectedEvent] = useState<EvolvitEvent | null>(null);

  return (
    <section id="events" className={styles.events} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Future Forward</span>
          <h2 className="section-title">
            <span className="gradient-text">Upcoming</span> Events
          </h2>
          <p className="section-subtitle">
            Get ready for what&apos;s next. Join us at our upcoming events.
          </p>
        </motion.div>

        {upcomingEvents.length > 0 ? (
          <motion.div
            className={styles.grid}
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            style={{ marginBottom: '80px' }}
          >
            {upcomingEvents.map((event) => (
              <EventCard key={event.title} event={event} onSelect={setSelectedEvent} />
            ))}
          </motion.div>
        ) : (
          <div style={{ textAlign: 'center', marginBottom: '80px', color: 'var(--text-muted)' }}>
            <p>No upcoming events currently scheduled. Stay tuned!</p>
          </div>
        )}

        {/* Divider */}
        <div className="section-divider" style={{ marginBottom: '64px' }} />

        {/* Past Events Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">What We&apos;ve Done</span>
          <h2 className="section-title">
            Past <span className="gradient-text">Experiences</span>
          </h2>
          <p className="section-subtitle">
            From hackathons to Industrial Visit — we create learning experiences that leave a mark.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {pastEvents.map((event) => (
            <EventCard key={event.title} event={event} onSelect={setSelectedEvent} />
          ))}
        </motion.div>
      </div>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
}
