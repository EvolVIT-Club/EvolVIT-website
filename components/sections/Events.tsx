'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Events.module.css';
import EventModal, { type EvolvitEvent } from '../EventModal';

const pastEvents: EvolvitEvent[] = [
  {
    title: 'EvolART',
    date: 'February 05, 2026',
    category: 'Inaugural Event',
    description: 'EvolVIT celebrated its launch with a campus-wide poster design competition.',
    extendedDescription:
      'EvolART marked the inauguration of EvolVIT at VIT Bhopal and gave students a platform to showcase creativity through digital and visual design. The event set the tone for a club focused on innovation, collaboration, and practical expression.',
    color: '#7c3aed',
    emoji: 'ART',
    images: ['img1.jpeg', 'img2.jpeg'],
  },
  {
    title: 'Ideathon',
    date: 'February 13-14, 2026',
    category: 'Ideathon',
    description: 'Idea to Industry connected problem solving with real-world product thinking.',
    extendedDescription:
      'The ideathon encouraged teams to move from raw ideas to workable solutions. Participants focused on feasibility, technical depth, and practical relevance while sharpening their collaboration and presentation skills.',
    color: '#a855f7',
    emoji: 'IDEA',
  },
  {
    title: 'Industrial Visit',
    date: 'February 17, 2026',
    category: 'Industrial Visit',
    description: 'Students explored how technical teams operate in a real company environment.',
    extendedDescription:
      'This visit gave participants direct exposure to professional workflows, cross-functional teamwork, and the practical use of technical skills in industry. It helped bridge classroom learning with workplace expectations.',
    color: '#3b82f6',
    emoji: 'IND',
    images: ['img4.jpg', 'img5.jpg'],
  },
  {
    title: 'Orientation Program',
    date: 'April 16, 2026',
    category: 'Orientation',
    description: 'A keynote-driven session on youth leadership, innovation, and nation building.',
    extendedDescription:
      'The orientation program invited students to think beyond academics and consider the larger role of youth in shaping future India. The session focused on leadership, innovation, and responsibility over the coming decades.',
    color: '#06b6d4',
    emoji: 'TALK',
    images: ['img6.jpg', 'img7.jpg', 'img8.jpg'],
  },
];

const upcomingEvents: EvolvitEvent[] = [
  {
    title: 'HackEvol 1.0',
    date: 'May 24, 2026',
    category: 'Upcoming Hackathon',
    description: 'A 48-hour build sprint for students ready to turn bold ideas into working prototypes.',
    extendedDescription:
      'HackEvol 1.0 is designed for fast team collaboration, mentor check-ins, and demo-day momentum. Participants will work on meaningful solutions and present them to reviewers at the end of the sprint.',
    color: '#f59e0b',
    emoji: 'HACK',
    registrationUrl: 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform',
  },
  {
    title: 'Idea2Industry Technical Ideathon',
    date: 'June 02, 2026',
    category: 'Flagship Ideathon',
    description: 'Teams will explore technical problem statements and shape them into industry-ready concepts.',
    extendedDescription:
      'Idea2Industry focuses on problem discovery, technical solution design, and pitch refinement. Students will work through a structured ideation process with mentor feedback and final evaluation.',
    color: '#7c3aed',
    emoji: 'I2I',
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdrcJ9mMj5useQSh5fqqpoj8A5yPOvOJaeCTDZnlD5bP9-_aA/viewform?usp=header',
  },
  {
    title: 'AI Build Sprint',
    date: 'June 14, 2026',
    category: 'Workshop Sprint',
    description: 'A guided one-day sprint for building practical AI-first tools with support from mentors.',
    extendedDescription:
      'This sprint combines short technical sessions with focused build blocks so participants can leave with a proof of concept, feedback, and a clearer roadmap for product development.',
    color: '#06b6d4',
    emoji: 'AI',
    registrationUrl: 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function EventCard({
  event,
  onSelect,
  showRegisterButton = false,
}: {
  event: EvolvitEvent;
  onSelect: (event: EvolvitEvent) => void;
  showRegisterButton?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.transform =
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ` +
      'translateY(-6px) scale(1.02)';
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
  };

  return (
    <motion.div
      className={styles.cardWrapper}
      variants={cardVariant}
      onClick={() => onSelect(event)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      style={{ transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <div
        className={styles.cardGlow}
        style={{ background: `radial-gradient(circle, ${event.color} 0%, transparent 70%)`, opacity: 0 }}
      />

      <div className={styles.cardBorderGlow} />

      <article className={styles.card}>
        <motion.div
          className={styles.cardHighlight}
          style={{ background: `linear-gradient(90deg, transparent, ${event.color}, transparent)` }}
          initial={{ opacity: 0, x: '-100%' }}
          whileHover={{ opacity: 1, x: '100%', transition: { repeat: Infinity, duration: 1.8, ease: 'linear' } }}
        />

        <div className={styles.cardTop} style={{ background: `linear-gradient(180deg, ${event.color}06 0%, transparent 100%)` }}>
          <div
            className={styles.categoryBadge}
            style={{ color: event.color, borderColor: `${event.color}30`, background: `${event.color}08` }}
          >
            <span className={styles.glowDot} style={{ background: event.color, boxShadow: `0 0 8px ${event.color}` }} />
            {event.category}
          </div>
          <div className={styles.emojiContainer} style={{ borderColor: `${event.color}15` }}>
            {event.emoji}
          </div>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.cardDate}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          <div className={styles.footerDivider} />
          <div className={styles.cardActions}>
            <span className={styles.cta_link} style={{ color: event.color }}>
              View Details
              <span className={styles.ctaArrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </span>

            {showRegisterButton && event.registrationUrl ? (
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.registerButton}
                onClick={(e) => e.stopPropagation()}
                style={{
                  color: event.color,
                  borderColor: `${event.color}40`,
                  boxShadow: `0 10px 30px ${event.color}20`,
                }}
              >
                Register
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </motion.div>
  );
}

export default function Events() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedEvent, setSelectedEvent] = useState<EvolvitEvent | null>(null);
  const [showUpcomingEvents, setShowUpcomingEvents] = useState(false);

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
            Register for the next event, then pick from all upcoming opportunities.
          </p>
        </motion.div>

        {upcomingEvents.length > 0 ? (
          <>
            <div className={styles.upcomingActions}>
              <button
                type="button"
                className={styles.primaryRegisterButton}
                onClick={() => setShowUpcomingEvents((prev) => !prev)}
              >
                {showUpcomingEvents ? 'Hide Upcoming Events' : 'Register for Next Event'}
              </button>
            </div>

            {showUpcomingEvents ? (
              <motion.div
                className={styles.grid}
                variants={container}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                style={{ marginBottom: '80px' }}
              >
                {upcomingEvents.map((event) => (
                  <EventCard
                    key={event.title}
                    event={event}
                    onSelect={setSelectedEvent}
                    showRegisterButton
                  />
                ))}
              </motion.div>
            ) : (
              <div className={styles.upcomingHint}>
                <p>Click the button above to view all upcoming events and open their registration forms.</p>
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', marginBottom: '80px', color: 'var(--text-muted)' }}>
            <p>No upcoming events currently scheduled. Stay tuned!</p>
          </div>
        )}

        <div className="section-divider" style={{ marginBottom: '64px' }} />

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
            From hackathons to industrial visits, we create learning experiences that leave a mark.
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
