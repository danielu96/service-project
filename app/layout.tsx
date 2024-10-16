import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar/Navbar';
import Providers from "./providers";
import CarouselComponent from "@/components/navbar/Carousel";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Service Next App",
  description: "Service app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div>
            <div className="container sticky top-0 z-50">
              <Navbar />
            </div>
            <CarouselComponent />
            <main className='container py-10'>{children}</main>
          </div>
        </Providers>
      </body>
    </html>

  );
}