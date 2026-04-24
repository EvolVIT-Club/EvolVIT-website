'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Footer.module.css';
import Initiatives from './sections/Initiatives';

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Community: [
    { label: 'About Us', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Events', href: '/events' },
    { label: 'Projects', href: '/projects' },
  ],
  Initiatives: [
    { label: 'EvolVIT X DataTrack', href: '/about' },
    { label: 'EvolVIT X Quantamard', href: '/about' },
    // { label: 'EvolVIT X Code & Learn', href: '/about' },
    // { label: 'EvolVIT X Placement Prep', href: '/about' },
  ],
  Connect: [
    { label: 'Instagram', href: 'https://www.instagram.com/evolvit.vit/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/evolvit-vit/' },
    { label: 'GitHub', href: 'https://github.com/EvolVIT-VIT' },
    // { label: 'Discord', href: '#' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <span className={styles.logoIcon}>⬡</span>
                <span className={styles.logoText}>EvolVIT</span>
              </Link>
              <p className={styles.tagline}>
                A student-driven tech community evolving ideas into innovation.
              </p>
              <div className={styles.socials}>
                {[
                  { href: 'https://www.instagram.com/evolvit.vit/ ', icon: '📸', label: 'Instagram' },
                  { href: 'https://www.linkedin.com/company/evolvit-vit/', icon: '💼', label: 'LinkedIn' },
                  { href: 'https://github.com/EvolVIT-VIT', icon: '🐙', label: 'GitHub' },
                  // { href: '#', icon: '💬', label: 'Discord' },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    className={styles.socialIcon}
                    title={s.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>{category}</h4>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {year} EvolVIT. Built with ❤️ by students, for students.
            </p>
            <div className={styles.legal}>
              <a href="#">Privacy Policy</a>
              <span className={styles.dot}>·</span>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
