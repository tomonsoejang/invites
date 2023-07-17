import './globals.css';
import { Inter, Happy_Monkey } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const happyMonkey = Happy_Monkey({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={happyMonkey.className}>{children}</body>
    </html>
  );
}
