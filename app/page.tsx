import React from 'react'
import ProductContainer from '@/components/home/ProductContainer';
import LoadingCards from '@/components/card/LoadingCards';
import { Suspense } from 'react';

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
    </section>
  )
}

export default HomePage;
