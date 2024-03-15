import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { cn } from '@/lib/utils';
import { MainLayout } from '@/app/components/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'POC app',
  description: 'POC 57B app description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'flex justify-center items-start')}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
