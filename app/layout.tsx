import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar/Navbar';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reservation Next App",
  description: "Reservation by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <div className="container fanart py-10" >
          <Navbar />
        </div>
        <main className='container py-10'>{children}</main>

      </body>
    </html>

  );
}