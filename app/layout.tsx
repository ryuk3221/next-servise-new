import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Сервисный центр Bosch Сочи',
    default: 'Сервисный центр Bosch Сочи - Ремонт бытовой техники'
  },
  description: 'Профессиональный ремонт бытовой техники Bosch в Сочи. Стиральные машины, посудомойки, кофемашины. Выезд мастера 24/7. Гарантия качества.',
  keywords: 'ремонт Bosch, сервисный центр Сочи, ремонт стиральных машин, ремонт посудомоечных машин, ремонт кофемашин',
  authors: [{ name: 'Сервисный центр Bosch Сочи' }],
  openGraph: {
    title: 'Сервисный центр Bosch Сочи',
    description: 'Профессиональный ремонт бытовой техники Bosch в Сочи',
    url: 'https://bosch-service-sochi.ru',
    siteName: 'Сервисный центр Bosch Сочи',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    yandex: 'your-yandex-verification-code',
    google: 'your-google-verification-code',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}