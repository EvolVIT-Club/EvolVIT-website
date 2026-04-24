'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.bgGlow} />
      <div className="container">
        <div className={styles.inner}>
          {/* Left */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Ready to <span className="gradient-text">Evolve?</span>
            </h2>
            <p className={styles.desc}>
              Join EvolVIT and be part of a community that&apos;s building the future. 
              Whether you&apos;re a beginner or a seasoned coder, there&apos;s a place for you.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span>evolvit@vitbhopal.ac.in</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span>VIT Bhopal University</span>
              </div>
            </div>

            <div className={styles.socials}>
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/evolvitclub_vitb/', icon: '📸' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/company/evolvit-club/', icon: '💼' },
                { label: 'GitHub', href: 'https://github.com/EvolVIT-Club', icon: '🐙' },
                // { label: 'Discord', href: '#', icon: '💬' },
              ].map((s) => (
                <a key={s.label} href={s.href} className={styles.socialLink} title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                className={styles.successState}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className={styles.successIcon}>✅</span>
                <h3>Message Sent!</h3>
                <p>We&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className="form-group">
                    <input type="text" id="name" className="form-input" placeholder="Full Name" required />
                    <label htmlFor="name" className="form-label">Full Name</label>
                  </div>
                  <div className="form-group">
                    <input type="email" id="email" className="form-input" placeholder="Email Address" required />
                    <label htmlFor="email" className="form-label">Email Address</label>
                  </div>
                </div>

                <div className="form-group">
                  <input type="text" id="subject" className="form-input" placeholder="Subject" />
                  <label htmlFor="subject" className="form-label">Subject</label>
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    className={`form-input ${styles.textarea}`}
                    placeholder="Message"
                    rows={5}
                    required
                  />
                  <label htmlFor="message" className="form-label">Message</label>
                </div>

                <motion.button
                  type="submit"
                  className={styles.submitBtn}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
