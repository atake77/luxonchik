'use client';

import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ProductPage.module.css'; // Убедитесь, что файл стилей существует

type Props = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: Props) {
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  const images = [
    product.image,
    '/placeholder-image-2.jpg',
    '/placeholder-image-3.jpg',
    '/placeholder-image-4.jpg'
  ];

  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(product.price);

  const formattedOldPrice = product.oldPrice
    ? new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0,
      }).format(product.oldPrice)
    : null;

  const nextImage = () => {
    setMainImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setMainImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${styles.container}`}>
  {/* Breadcrumbs */}
  <nav className={`mb-8 ${styles.breadcrumbs}`}>
    <ol className="flex items-center space-x-2 text-sm text-gray-500">
      <li>
        <Link href="/" className="hover:text-emerald-600 transition-colors duration-200">
          Главная
        </Link>
      </li>
      <li className="text-gray-300">/</li>
      <li>
        <Link href="/catalog" className="hover:text-emerald-600 transition-colors duration-200">
          Каталог
        </Link>
      </li>
      <li className="text-gray-300">/</li>
      <li className="text-emerald-700 font-medium truncate max-w-xs">{product.name}</li>
    </ol>
  </nav>

  {/* Product Content */}
  <div className={`flex flex-col lg:flex-row gap-12 ${styles.productLayout}`}>
    {/* Image Gallery */}
    <div className={`w-full lg:w-1/2 ${styles.gallery}`}>
      <div className={`relative aspect-square bg-gray-50 rounded-xl overflow-hidden group ${styles.mainImageContainer}`}>
        {/* ... */}
      </div>

      {/* Thumbnails */}
      <div className={`mt-6 flex gap-3 overflow-x-auto pb-2 ${styles.thumbnails}`}>
        {/* ... */}
      </div>
    </div>

    {/* Product Info */}
    <div className={`w-full lg:w-1/2 ${styles.productInfo}`}>
      {/* Title and Rating */}
      <div className={`pb-6 border-b border-gray-100 ${styles.productHeader}`}>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`text-3xl font-bold text-gray-900 ${styles.productTitle}`}
        >
          {product.name}
        </motion.h1>

        <div className={`mt-4 flex items-center ${styles.ratingContainer}`}>
          <div className={`flex ${styles.stars}`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${star <= 4 ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">(16 отзывов)</span>
          <Link href="#reviews" className={`ml-4 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors ${styles.reviewLink}`}>
            Оставить отзыв
          </Link>
        </div>
      </div>

      {/* Price */}
      <div className={`mt-6 ${styles.priceContainer}`}>
        <div className="flex items-baseline gap-3">
          <span className={`text-3xl font-bold text-gray-900 ${styles.price}`}>{formattedPrice}</span>
          {formattedOldPrice && (
            <span className={`text-lg text-gray-400 line-through ${styles.oldPrice}`}>{formattedOldPrice}</span>
          )}
        </div>
        {product.discount && (
          <span className={`inline-block mt-2 px-2 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded ${styles.discountBadge}`}>
            Скидка {product.discount}%
          </span>
        )}
      </div>

      {/* Description */}
      <div className={`mt-8 ${styles.description}`}>
        <h3 className={`text-lg font-medium text-gray-900 mb-3 ${styles.descriptionTitle}`}>О товаре</h3>
        <p className={`text-gray-600 leading-relaxed ${styles.descriptionText}`}>
          {product.description ||
            'Мысленные орудия - затопленый подарок для особых случаев. Этот изысканный предмет сочетает в себе элегантность и функциональность, создавая неповторимый акцент в любом интерьере.'}
        </p>
      </div>

      {/* Availability */}
      <div className={`mt-6 flex items-center ${styles.availability}`}>
        <span className={`w-2 h-2 rounded-full mr-2 ${product.availability ? styles.available : styles.unavailable} ${styles.availabilityDot}`} />
        <span className="text-sm font-medium">
          {product.availability ? 'В наличии' : 'Под заказ (доставка 3-5 дней)'}
        </span>
      </div>

      {/* Quantity Selector */}
      <div className={`mt-8 ${styles.quantityContainer}`}>
        <div className="flex items-center">
          <span className={`mr-4 text-sm font-medium text-gray-700 ${styles.quantityLabel}`}>Количество:</span>
          <div className={`flex items-center border border-gray-200 rounded-lg ${styles.quantitySelector}`}>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className={`px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors ${styles.quantityButton}`}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className={`px-4 py-2 text-gray-900 font-medium ${styles.quantityDisplay}`}>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className={`px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors ${styles.quantityButton}`}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={`mt-8 flex flex-col sm:flex-row gap-4 ${styles.actionButtons}`}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 ${styles.primaryButton}`}
        >
          <ShoppingCart className="h-5 w-5" />
          Добавить в корзину
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex-1 px-6 py-3 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium rounded-lg shadow-sm transition-colors duration-200 ${styles.secondaryButton}`}
        >
          Купить сейчас
        </motion.button>
      </div>

      {/* Share and Back */}
      <div className={`mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${styles.shareContainer}`}>
        <div className="flex items-center">
          <span className={`text-sm font-medium text-gray-700 mr-3 ${styles.shareTitle}`}>Поделиться:</span>
          <div className={`flex gap-2 ${styles.socialButtons}`}>
            {['facebook', 'twitter', 'instagram', 'vk'].map((social) => (
              <button
                key={social}
                className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors ${styles.socialButton}`}
                aria-label={`Share on ${social}`}
              >
                <Share2 className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
        <Link
          href="/catalog"
          className={`flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors ${styles.backLink}`}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Вернуться в каталог
        </Link>
      </div>

      {/* Product Details */}
      <div className={`mt-8 ${styles.details}`}>
        <h3 className={`text-lg font-medium text-gray-900 mb-4 ${styles.detailsTitle}`}>Детали</h3>
        <div className={`grid grid-cols-2 gap-4 ${styles.detailsGrid}`}>
          <div>
            <span className={`block text-sm text-gray-500 ${styles.detailLabel}`}>Категория</span>
            <span className={`block text-sm font-medium ${styles.detailValue}`}> Орхидеи</span>
          </div>
          <div>
            <span className={`block text-sm text-gray-500 ${styles.detailLabel}`}>Материал</span>
            <span className={`block text-sm font-medium ${styles.detailValue}`}> Керамика</span>
          </div>
          <div>
            <span className={`block text-sm text-gray-500 ${styles.detailLabel}`}>Размер</span>
            <span className={`block text-sm font-medium ${styles.detailValue}`}> 25 см</span>
          </div>
          <div>
            <span className={`block text-sm text-gray-500 ${styles.detailLabel}`}>Вес</span>
            <span className={`block text-sm font-medium ${styles.detailValue}`}> 0.8 кг</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</main> )}