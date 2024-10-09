import React from 'react'
import ProductContainer from '@/components/home/ProductContainer';
import LoadingCards from '@/components/card/LoadingCards';
import { Suspense } from 'react';
import Map from '@/components/map/map';
import Footer from '@/components/footer/Footer';

function HomePage({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  return (
    <section >
      <Suspense fallback={<LoadingCards />}>
        <ProductContainer search={searchParams.search} />
      </Suspense>
      <Map />
      <Footer />
    </section>
  )
}

export default HomePage;
