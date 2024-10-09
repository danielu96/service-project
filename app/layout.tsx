import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar/Navbar';
import Providers from "./providers";



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
          <div className="container fanart py-10 mt-8 mx-8" >
            <Navbar />
          </div>
          <main className='container py-10'>{children}</main>
        </Providers>
      </body>
    </html>

  );
}