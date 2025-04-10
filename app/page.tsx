// /app/page.tsx

import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import { products } from '@/lib/products';

export default function HomePage() {
  // Здесь можно фильтровать или выбирать только популярные товары для главной
  const popularProducts = products.slice(0, 6); // например, первые 6 товаров

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Популярные товары */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Популярные товары</h2>
        <ProductGrid products={popularProducts} />
      </section>
    </main>
  );
}
