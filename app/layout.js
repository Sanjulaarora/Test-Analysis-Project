import { Inter } from 'next/font/google';
import "./globals.css";
import Header from '@/components/header';

export const metadata = {
  title: "Test Analysis App",
  description: "Generated by create next app",
};

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
