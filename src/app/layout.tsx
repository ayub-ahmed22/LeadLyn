import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import TollFreeNumber from './components/TollFreeNumber';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeadLyn - Security & Technology Solutions",
  description: "Comprehensive security and technology solutions for your business needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <TollFreeNumber />
      </body>
    </html>
  );
}
