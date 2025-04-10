'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Header/Navigation */}
        <header className={styles.header}>
          <Link href="/" className={styles.logo}>
            Luxon
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/catalog" className={styles.navLink}>Catalog</Link>
            <Link href="/contacts" className={styles.navLink}>Contacts</Link>
          </nav>
        </header>

        {/* Hero Content */}
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>
              Свежие цветы<br />для особых моментов
            </h1>
            <p className={styles.subtitle}>
              Укрась свой день или порадуй близких — выбери идеальный букет прямо сейчас.
            </p>
            <Link href="/catalog" className={styles.button}>
              <span>Перейти в каталог</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrow} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className={styles.imageWrapper}>
            <Image
              src="/flowers/hero-flower.jpg"
              alt="Букет цветов"
              width={600}
              height={600}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}