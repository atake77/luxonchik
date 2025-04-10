'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css'; // Импортируем стили

type Product = {
  id: string;
  name: string;
  price: number;
  image: string; // относительный путь, например: '/flowers/rose.jpg'
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/product/${product.id}`} className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>
          {product.name}
        </h3>
        <p className={styles.productPrice}>
          {product.price.toFixed(2)} ₽
        </p>
        {/* Если вы хотите добавить кнопку "Добавить в корзину" */}
        <Link
          href={`/product/${product.id}`}
          className={styles.addToCartButton}
        >
          Подробнее
        </Link>
      </div>
    </Link>
  );
}
