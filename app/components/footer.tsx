'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Copyright */}
          <p className={styles.brand}>
            &copy; {new Date().getFullYear()} FlowerShop. Все права защищены.
          </p>

          {/* Navigation links */}
          <div className={styles.links}>
            <Link href="/catalog" className={styles.link}>
              Каталог
            </Link>
            <Link href="/contacts" className={styles.link}>
              Контакты
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
