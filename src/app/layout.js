import { Inter } from '@next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Pinterest Hero Demo',
  description: 'Simple example of the Pinterest Hero component',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.className}>
      <body className='h-screen w-screen relative'>{children}</body>
    </html>
  );
}
