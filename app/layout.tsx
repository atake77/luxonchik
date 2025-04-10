import { ReactNode } from 'react';
import Appbar from './components/Appbar';
import Footer from './components/footer';
import '../styles/globals.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" dir="ltr" className="scroll-smooth">
      <head>
        <title>FlowerShop</title>
        <meta name="description" content="Магазин свежих цветов для вашего настроения" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#38a169" />

        {/* Open Graph для социальных сетей */}
        <meta property="og:title" content="FlowerShop" />
        <meta property="og:description" content="Свежие букеты для любого повода" />
        <meta property="og:image" content="/og-preview.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="font-sans bg-gray-50 text-gray-900 antialiased">
        {/* Шапка */}
        <Appbar />

        {/* Контент с анимацией появления */}
        <main className="min-h-[70vh] px-4 sm:px-6 lg:px-8 py-6 animate-fade-in">
          {children}
        </main>

        {/* Подвал */}
        <Footer />
      </body>
    </html>
  );
}

