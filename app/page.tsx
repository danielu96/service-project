
import ProductContainer from '@/components/home/ProductContainer';
import React from 'react'

function HomePage({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  return (
    <section className='font-bold capitalize mx-auto'>

      <ProductContainer search={searchParams.search} />

    </section>
  )
}

export default HomePage;
