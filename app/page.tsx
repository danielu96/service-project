import React from 'react'
import ProductContainer from '@/components/home/ProductContainer';
// import LoadingCards from '@/components/card/LoadingCards';
import { Suspense } from 'react';
import Map from '@/components/map/map';
import Footer from '@/components/footer/Footer';
import CategoriesList from '@/components/home/CatgoriesList';

function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  return (
    <section >
      <CategoriesList
        category={searchParams.category}
        search={searchParams.search}
      />
      <Suspense
      // fallback={<LoadingCards />}
      >
        <ProductContainer
          category={searchParams.category}
          search={searchParams.search} />
      </Suspense>
      <div className='container'><Map /></div>

      <Footer />
    </section>
  )
}

export default HomePage;
