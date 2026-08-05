import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pure Next',
  description: 'A minimal Next.js App Router starter.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>eee{children}</body>
    </html>
  );
}
