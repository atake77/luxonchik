'use client';

import ProductCard from '../components/ProductCard';
import styles from './ProductGrid.module.css'; // Импортируем стили

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        Нет доступных товаров.
      </div>
    );
  }

  return (
    <div className={styles.productGrid}>
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`${styles.productGridItem} animation-delay-${index * 100}`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
