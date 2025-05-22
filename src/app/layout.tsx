import { inter, roboto } from './fonts';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Club Corners Car Wash',
  description: 'Premium car wash experience in Alpharetta, GA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
