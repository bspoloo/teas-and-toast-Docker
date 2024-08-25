import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./atomic/organisms/Header";
import Footer from "./atomic/organisms/Footer";
import "./globals.css";
import ProductProvider from "./providers/ProductProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Taste and Toast Now',
  description: 'Software development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductProvider>
          <Header />
          {children}
          <Footer />
        </ProductProvider>
      </body>
    </html>
  );
}