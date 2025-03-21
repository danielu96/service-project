import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar/Navbar';
import Providers from "./providers";
import CarouselComponent from "@/components/navbar/Carousel";
import { ClerkProvider } from '@clerk/nextjs';
import { Suspense } from "react";
import LoadingCards from "@/components/card/LoadingCards";
import ErrorBoundary from "./ErrorBoundary";

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
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <div className="w-full px-2">
              <div className="sticky top-0 z-50">
                <Navbar />
              </div>
              <CarouselComponent />
              <ErrorBoundary>
                <Suspense fallback={<LoadingCards />}>
                  <main className='container py-10'>{children}</main>
                </Suspense>
              </ErrorBoundary>
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>

  );
}