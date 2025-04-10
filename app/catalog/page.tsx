'use client';

import { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../../lib/products';
import styles from './CatalogPage.module.css'; // Импортируем стили

export default function CatalogPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Отслеживаем прокрутку страницы
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className={`${styles.catalogContainer} max-w-7xl mx-auto`}>
      {/* Заголовок с анимацией */}
      <h1
        className={`${styles.catalogTitle} ${isScrolled ? styles.catalogTitleScrolled : ''}`}
      >
        Каталог
      </h1>
      
      {/* Панель фильтров и сортировки */}
      <div className={styles.filterBar}>
        <button className={styles.filterButton}>Фильтровать</button>
        <button className={styles.filterButton}>Сортировать</button>
      </div>

      {/* Отображение товаров в виде сетки */}
      <ProductGrid products={products} />
    </main>
  );
}
