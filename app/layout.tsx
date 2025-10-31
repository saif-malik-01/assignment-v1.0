import type { Metadata } from 'next';
import axiforma from '@/lib/fonts/axiforma';
import './globals.css';

export const metadata: Metadata = {
  title: 'Assignment - Web App',
  description: 'Created for assignment given by recruiter',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={axiforma.variable}>
      <body className={`${axiforma.className} antialiased`}>{children}</body>
    </html>
  );
}
