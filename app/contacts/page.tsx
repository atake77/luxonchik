'use client';

import styles from './ContactsPage.module.css'; // Импортируем стили

export default function ContactsPage() {
  return (
    <main className={styles.contactsContainer}>
      {/* Заголовок с эффектом градиента */}
      <h1 className={styles.contactsTitle}>Контакты</h1>

      <div className="space-y-6">
        {/* Блок с адресом */}
        <div className={styles.contactItem}>
          <p className={styles.contactsText}>
            <strong>Адрес:</strong> г. Бишкек, Жибек жолу 57
          </p>
        </div>

        {/* Блок с телефоном */}
        <div className={styles.contactItem}>
          <p className={styles.contactsText}>
            <strong>Телефон:</strong>{' '}
            <a href="tel:+74951234567" className={styles.contactsLink}>
              +996 555 454 755
            </a>
          </p>
        </div>

        {/* Блок с email */}
        <div className={styles.contactItem}>
          <p className={styles.contactsText}>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@flowershop.ru" className={styles.contactsLink}>
              info@flowershop.kg
            </a>
          </p>
        </div>

        {/* Блок с режимом работы */}
        <div className={styles.contactItem}>
          <p className={styles.contactsText}>
            <strong>Режим работы:</strong> Пн–Вс, 9:00–21:00
          </p>
        </div>
      </div>

      {/* Вставка карты */}
      {/* 
      <div className={styles.mapContainer}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ayour-map-id&source=constructor"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      */}
    </main>
  );
}
