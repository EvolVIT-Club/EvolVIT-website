'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Events.module.css';
import EventModal, { type EvolvitEvent } from '../EventModal';

/* ── Event data ─────────────────────────────────────────────────────────── */
const pastEvents: EvolvitEvent[] = [
  {
    title: 'EvolART',
    date: 'February 05, 2026',
<<<<<<< HEAD
    category: 'Inaugural Event',
    description: 'EvolVIT celebrated its launch with a campus-wide poster design competition.',
    extendedDescription:
      'EvolART marked the inauguration of EvolVIT at VIT Bhopal and gave students a platform to showcase creativity through digital and visual design. The event set the tone for a club focused on innovation, collaboration, and practical expression.',
=======
    category: 'Inaugral Event',
    description:
      'EvolVIT — VIT Bhopal\'s 100th Official Club — is here to spark innovation & creativity across campus! 💡 And we\'re celebrating our grand launch with 🎨 EvolART— The Ultimate Poster Design Competition!',
    extendedDescription:
      'EVOLART marked the successful inauguration of the EvolVIT Club, proudly recognized as the 100th club of VIT Bhopal University. This event set the foundation for a journey that blends creativity with innovation.The event provided a vibrant platform for students to showcase their artistic talents through various forms such as digital design, sketching, and creative expression.Participants brought forward unique ideas with great enthusiasm, making the event both engaging and inspiring. As the inaugural event, EVOLART highlighted the club\'s vision of fostering creativity, collaboration, and technological excellence.',
>>>>>>> aedec0e (first commit)
    color: '#7c3aed',
    emoji: 'ART',
    images: ['img1.jpeg', 'img2.jpeg'],
  },
  {
    title: 'Ideathon',
    date: 'February 13-14, 2026',
    category: 'Ideathon',
<<<<<<< HEAD
    description: 'Idea to Industry connected problem solving with real-world product thinking.',
    extendedDescription:
      'The ideathon encouraged teams to move from raw ideas to workable solutions. Participants focused on feasibility, technical depth, and practical relevance while sharpening their collaboration and presentation skills.',
    color: '#a855f7',
    emoji: 'IDEA',
=======
    description: 'Idea to Industry\'26 — turning innovative ideas into real-world solutions.',
    extendedDescription:
      'IDEATHON – IDEA TO INDUSTRY\'26 was an innovative event organized by the EvolVIT Club, aimed at transforming creative ideas into practical, real-world solutions.Participants showcased their problem-solving abilities by presenting unique and impactful concepts, focusing on innovation, feasibility, and real-world applications. The event encouraged critical thinking, collaboration, and an entrepreneurial mindset among students.\n\nIDEATHON successfully bridged the gap between ideas and industry-driven solutions, reflecting EvolVIT\'s vision of fostering innovation and technological growth. 🚀 ',
    color: '#a855f7',
    emoji: '⚡',
>>>>>>> aedec0e (first commit)
  },
  {
    title: 'Industrial Visit',
    date: 'February 17, 2026',
    category: 'Industrial Visit',
<<<<<<< HEAD
    description: 'Students explored how technical teams operate in a real company environment.',
    extendedDescription:
      'This visit gave participants direct exposure to professional workflows, cross-functional teamwork, and the practical use of technical skills in industry. It helped bridge classroom learning with workplace expectations.',
=======
    description: 'Industry exposure at Appointy — bridging academics with real-world tech.',
    extendedDescription:
      'The Industrial Visit organized by EvolVIT Club provided students with real-world exposure to industry practices.\n\nParticipants gained insights into AI workflows, team collaboration, and the practical application of technical skills in a professional environment. The visit enhanced students\' understanding of industry expectations and inspired them to pursue excellence in their academic and professional journeys.',
>>>>>>> aedec0e (first commit)
    color: '#3b82f6',
    emoji: 'IND',
    images: ['img4.jpg', 'img5.jpg'],
  },
  {
    title: 'Orientation Program',
    date: 'April 16, 2026',
    category: 'Orientation',
<<<<<<< HEAD
    description: 'A keynote-driven session on youth leadership, innovation, and nation building.',
    extendedDescription:
      'The orientation program invited students to think beyond academics and consider the larger role of youth in shaping future India. The session focused on leadership, innovation, and responsibility over the coming decades.',
=======
    description: 'Youth as Game changers for Viksit Bharat - Role from 2026 to 2047',
    extendedDescription:
      'Brigadier Rajneesh Gaur, an alumnus of the prestigious National Defence Academy (NDA) and a distinguished veteran of the Indian Army, graced the occasion as the esteemed Chief Guest. His illustrious career, marked by valor and leadership, provided a beacon of inspiration for the young minds present. Brigadier Gaur\'s address centered on the pivotal role of youth in shaping the trajectory of a developed India, emphasizing the critical period from 2026 to 2047. He eloquently articulated how the youth, armed with innovation, determination, and a commitment to excellence, are the driving force behind the nation\'s transformation. His insights resonated deeply with the audience, encouraging them to embrace their potential as catalysts of change and to contribute meaningfully to India\'s journey towards becoming a global leader.',
>>>>>>> aedec0e (first commit)
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
<<<<<<< HEAD
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
=======
    description: 'Get ready for the biggest 48-hour hackathon of the year.',
    extendedDescription:
      'We are gearing up for HackEvol 1.0! Stay tuned for more updates, themes, and prize pool announcements. Prepare your teams for an extraordinary 48 hours of building solutions that matter.',
    color: '#f59e0b',
    emoji: '🚀',
    images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop'],
>>>>>>> aedec0e (first commit)
  },
];

/* ── Helpers ─────────────────────────────────────────────────────────────── */
type Status = 'upcoming' | 'closed';

function getStatus(event: EvolvitEvent): Status {
  if (upcomingEvents.some((e) => e.title === event.title)) return 'upcoming';
  return 'closed';
}

/** Map category → tech icon (SVG path string or inline) */
function getTechIcon(category: string): React.ReactNode {
  const cat = category.toLowerCase();
  if (cat.includes('hack')) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }
  if (cat.includes('idea') || cat.includes('innov')) {
    return <span style={{ fontSize: '0.85rem' }}>⚡</span>;
  }
  if (cat.includes('ai') || cat.includes('ml')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    );
  }
  if (cat.includes('visit') || cat.includes('industry')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    );
  }
  if (cat.includes('orient')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    );
  }
  return <span style={{ fontSize: '0.85rem' }}>&lt;/&gt;</span>;
}

/* ── Countdown Timer ─────────────────────────────────────────────────────── */
function CountdownTimer({ color }: { color: string }) {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    // Target: 60 days from today as placeholder since date is TBA
    const target = new Date();
    target.setDate(target.getDate() + 60);

    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      setTime({ days, hours, mins, secs });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'DAYS', val: time.days },
    { label: 'HRS', val: time.hours },
    { label: 'MIN', val: time.mins },
    { label: 'SEC', val: time.secs },
  ];

  return (
    <div className={styles.countdown}>
      <span className={styles.countdownLabel} style={{ color }}>⏱ Countdown</span>
      <div className={styles.countdownUnits}>
        {units.map(({ label, val }, i) => (
          <div key={label} className={styles.countdownUnit}>
            <span className={styles.countdownVal} style={{ borderColor: `${color}25` }}>
              {String(val).padStart(2, '0')}
            </span>
            <span className={styles.countdownUnitLabel}>{label}</span>
            {i < units.length - 1 && <span className={styles.countdownSep} style={{ color }}>:</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Registration Bar ────────────────────────────────────────────────────── */
function RegBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className={styles.regBar}>
      <div className={styles.regBarHeader}>
        <span className={styles.regBarLabel}>Registration</span>
        <span className={styles.regBarPct} style={{ color }}>{pct}% filled</span>
      </div>
      <div className={styles.regBarTrack}>
        <div
          className={styles.regBarFill}
          style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}90, ${color})` }}
        />
      </div>
    </div>
  );
}

/* ── Corner Accent ───────────────────────────────────────────────────────── */
function CornerAccent({ color, position }: { color: string; position: 'tl' | 'br' }) {
  const isTL = position === 'tl';
  return (
    <svg
      className={`${styles.cornerAccent} ${isTL ? styles.cornerTL : styles.cornerBR}`}
      width="24" height="24" viewBox="0 0 24 24" fill="none"
    >
      {isTL ? (
        <>
          <path d="M1 12 L1 1 L12 1" stroke={color} strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="1" cy="1" r="2" fill={color} fillOpacity="0.8" />
        </>
      ) : (
        <>
          <path d="M23 12 L23 23 L12 23" stroke={color} strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="23" cy="23" r="2" fill={color} fillOpacity="0.8" />
        </>
      )}
    </svg>
  );
}

/* ── Status Badge ────────────────────────────────────────────────────────── */
function StatusBadge({ status }: { status: Status }) {
  const config = {
    upcoming: { label: 'Upcoming', cls: styles.badgeUpcoming },
    closed: { label: 'Closed', cls: styles.badgeClosed },
  }[status];
  return <span className={`${styles.statusBadge} ${config.cls}`}>{config.label}</span>;
}

/* ── Ripple Button ───────────────────────────────────────────────────────── */
function RippleButton({ color, onClick }: { color: string; onClick?: () => void }) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = styles.ripple;
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
    onClick?.();
  };

  return (
    <button
      ref={btnRef}
      className={styles.ctaBtn}
      style={{
        background: `linear-gradient(135deg, #7c3aed, ${color})`,
        boxShadow: `0 4px 24px ${color}40`,
      }}
      onClick={handleClick}
      title="Click to explore event details"
    >
      <span>View Details</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
}

/* ── Framer variants ─────────────────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const cardVariant = {
<<<<<<< HEAD
  hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
=======
  hidden: { opacity: 0, y: 52, filter: 'blur(10px)' },
>>>>>>> aedec0e (first commit)
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
<<<<<<< HEAD
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
=======
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* ── EventCard ───────────────────────────────────────────────────────────── */
function EventCard({
  event,
  onSelect,
  isUpcoming = false,
}: {
  event: EvolvitEvent;
  onSelect: (e: EvolvitEvent) => void;
  isUpcoming?: boolean;
>>>>>>> aedec0e (first commit)
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const status = getStatus(event);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
<<<<<<< HEAD
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.transform =
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ` +
      'translateY(-6px) scale(1.02)';
=======
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -5;
    const ry = ((x - cx) / cx) * 5;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px) scale(1.02)`;
    if (glow) glow.style.opacity = '1';
>>>>>>> aedec0e (first commit)
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (card) card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
    if (glow) glow.style.opacity = '0';
  };

  return (
    <motion.div
      className={styles.cardWrapper}
      variants={cardVariant}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      style={{ transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <div
        ref={glowRef}
        className={styles.cardGlow}
        style={{ background: `radial-gradient(circle, ${event.color}60 0%, transparent 70%)`, opacity: 0 }}
      />

<<<<<<< HEAD
      <div className={styles.cardBorderGlow} />

      <article className={styles.card}>
=======
      {/* Spinning gradient border */}
      <div className={styles.cardBorderGlow} />

      <article className={styles.card}>
        {/* Circuit pattern overlay */}
        <div className={styles.circuitOverlay} />

        {/* Scanning laser on hover */}
>>>>>>> aedec0e (first commit)
        <motion.div
          className={styles.cardHighlight}
          style={{ background: `linear-gradient(90deg, transparent, ${event.color}, transparent)` }}
          initial={{ opacity: 0, x: '-100%' }}
          whileHover={{ opacity: 1, x: '100%', transition: { repeat: Infinity, duration: 1.8, ease: 'linear' } }}
        />

<<<<<<< HEAD
        <div className={styles.cardTop} style={{ background: `linear-gradient(180deg, ${event.color}06 0%, transparent 100%)` }}>
          <div
            className={styles.categoryBadge}
            style={{ color: event.color, borderColor: `${event.color}30`, background: `${event.color}08` }}
          >
            <span className={styles.glowDot} style={{ background: event.color, boxShadow: `0 0 8px ${event.color}` }} />
            {event.category}
=======
        {/* Corner accents */}
        <CornerAccent color={event.color} position="tl" />
        <CornerAccent color={event.color} position="br" />

        {/* ── Card Top ──────────────────────────────── */}
        <div className={styles.cardTop} style={{ background: `linear-gradient(180deg, ${event.color}08 0%, transparent 100%)` }}>
          <div className={styles.topLeft}>
            {/* Category badge */}
            <div
              className={styles.categoryBadge}
              style={{ color: event.color, borderColor: `${event.color}35`, background: `${event.color}10` }}
            >
              <span className={styles.techIcon} style={{ color: event.color }}>
                {getTechIcon(event.category)}
              </span>
              {event.category}
            </div>

            {/* Status badge */}
            <StatusBadge status={status} />
>>>>>>> aedec0e (first commit)
          </div>

          {/* Emoji icon */}
          <div className={styles.emojiContainer} style={{ borderColor: `${event.color}20`, boxShadow: `0 0 20px ${event.color}10` }}>
            <span className={styles.emojiInner}>{event.emoji}</span>
          </div>
        </div>

<<<<<<< HEAD
=======
        {/* ── Card Body ─────────────────────────────── */}
>>>>>>> aedec0e (first commit)
        <div className={styles.cardBody}>
          <div className={styles.cardDate}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {event.date}
          </div>

          <h3 className={styles.cardTitle}>{event.title}</h3>
          <p className={styles.cardDesc}>{event.description}</p>

          {/* Countdown for upcoming */}
          {isUpcoming && <CountdownTimer color={event.color} />}

          {/* Registration bar for upcoming */}
          {isUpcoming && <RegBar pct={34} color={event.color} />}
        </div>

<<<<<<< HEAD
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
=======
        {/* ── Card Footer ───────────────────────────── */}
        <div className={styles.cardFooter}>
          <div className={styles.footerDivider} style={{ background: `linear-gradient(90deg, transparent, ${event.color}20, transparent)` }} />
          <RippleButton color={event.color} onClick={() => onSelect(event)} />
>>>>>>> aedec0e (first commit)
        </div>
      </article>
    </motion.div>
  );
}

/* ── Section ──────────────────────────────────────────────────────────────── */
export default function Events() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedEvent, setSelectedEvent] = useState<EvolvitEvent | null>(null);
  const [showUpcomingEvents, setShowUpcomingEvents] = useState(false);

  return (
    <section id="events" className={styles.events} ref={ref}>
      {/* Background decorations */}
      <div className={styles.gridBg} />
      <div className={styles.noiseOverlay} />

      <div className="container">
        {/* ── Upcoming header ─────────────────────────── */}
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
<<<<<<< HEAD
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
=======
          <motion.div
            className={`${styles.grid} ${styles.gridUpcoming}`}
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            style={{ marginBottom: '88px' }}
          >
            {upcomingEvents.map((event) => (
              <EventCard key={event.title} event={event} onSelect={setSelectedEvent} isUpcoming />
            ))}
          </motion.div>
>>>>>>> aedec0e (first commit)
        ) : (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>📡</span>
            <p>No upcoming events currently scheduled. Stay tuned!</p>
          </div>
        )}

<<<<<<< HEAD
        <div className="section-divider" style={{ marginBottom: '64px' }} />

=======
        {/* Divider */}
        <div className={styles.sectionDivider} />

        {/* ── Past Events header ──────────────────────── */}
>>>>>>> aedec0e (first commit)
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ marginTop: '80px' }}
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
