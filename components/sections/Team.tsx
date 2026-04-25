'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Team.module.css';

const team = [
  { name: 'Ayush Karan', role: 'President', emoji: '👨‍💻', Instagram : '#', linkedin: '#', github: '#' },
   { name: 'Parth Gholap', role: 'President', emoji: '👨‍💻', Instagram: '#', linkedin: '#', github: '#' },
  { name: 'Ashish Raj', role: 'General Secratary', emoji: '👩‍🔬', Instagram: '#', linkedin: '#', github: '#' },
    { name: 'Abhiral Jain', role: 'Lead — Research and Development', emoji: '👩‍🔬', Instagram : 'https://www.instagram.com/abhirallll___/', linkedin: 'https://www.linkedin.com/in/jainabhiral/', github: 'https://github.com/AbhiralJain07' },
      { name: 'Rishi Dewangan', role: 'Lead — Technical', emoji: '🌐', Instagram: '#', linkedin: '#', github: '#' },
  { name: 'Manasvi Kirkire', role: 'Lead — Design', emoji: '🎨', Instagram: '#', linkedin: '#', github: '#' },
  { name: 'Vaishnavi Singh', role: 'Lead — Media', emoji: '📷', twitter: '#', linkedin: '#', github: '#' },
  { name: 'Om Patel', role: 'Lead — Photography', emoji: '📸', twitter: '#', linkedin: '#', github: '#' },
];

const faculty = [
  { name: 'NB Prakash', role: 'Faculty Coordinator', emoji: '👨‍🏫', Instagram: '#', linkedin: '#', github: '#' },
];

const gradients = [
  'linear-gradient(135deg, #7c3aed, #a855f7)',
  'linear-gradient(135deg, #3b82f6, #7c3aed)',
  'linear-gradient(135deg, #a855f7, #ec4899)',
  'linear-gradient(135deg, #06b6d4, #3b82f6)',
  'linear-gradient(135deg, #059669, #06b6d4)',
  'linear-gradient(135deg, #f59e0b, #ef4444)',
  'linear-gradient(135deg, #ec4899, #f59e0b)',
  'linear-gradient(135deg, #7c3aed, #06b6d4)',
];

const MemberCard = ({ member, index, inView }: { member: any; index: number; inView: boolean }) => (
  <motion.div
    className={styles.card}
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.08 }}
    whileHover="hover"
  >
    {/* Avatar */}
    <div className={styles.avatarWrap}>
      <div className={styles.avatar} style={{ background: gradients[index % gradients.length] }}>
        <span className={styles.avatarEmoji}>{member.emoji}</span>
      </div>

      {/* Social icons overlay */}
      <motion.div
        className={styles.socialOverlay}
        variants={{
          rest: { opacity: 0, scale: 0.85 },
          hover: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
        }}
      >
        {member.twitter && (
          <a href={member.twitter} className={styles.socialIcon} title="Twitter">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        )}
        {member.Instagram && (
          <a href={member.Instagram} className={styles.socialIcon} title="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} className={styles.socialIcon} title="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        )}
        {member.github && (
          <a href={member.github} className={styles.socialIcon} title="GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        )}
      </motion.div>
    </div>

    <div className={styles.info}>
      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.role}>{member.role}</p>
    </div>
  </motion.div>
);

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="team" className={styles.team} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">The People</span>
          <h2 className="section-title">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="section-subtitle">
            The passionate minds behind EvolVIT who make it all happen.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} inView={inView} />
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider" style={{ margin: '80px 0' }} />

        {/* Faculty Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">
            Faculty <span className="gradient-text">Coordinators</span>
          </h2>
          <p className="section-subtitle">
            Guiding EvolVIT towards unparalleled success.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div className={styles.facultyGrid}>
          {faculty.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
