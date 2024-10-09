import React from 'react'
import ProductContainer from '@/components/home/ProductContainer';
import LoadingCards from '@/components/card/LoadingCards';
import { Suspense } from 'react';
import Map from '@/components/map/map';

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
    </section>
  )
}

export default HomePage;
