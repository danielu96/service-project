import React from 'react'
import ProductContainer from '@/components/home/ProductContainer';
import LoadingCards from '@/components/card/LoadingCards';
// import { Suspense } from 'react';
import Map from '@/components/map/map';
import Footer from '@/components/footer/Footer';
import CategoriesList from '@/components/home/CatgoriesList';

// function HomePage({
//   searchParams,
// }: {
//   searchParams: { category?: string; search?: string };
// }) {
//   return (
//     <section >
//       <CategoriesList
//         category={searchParams.category}
//         search={searchParams.search}
//       />
//       <Suspense
//         fallback={<LoadingCards />}
//       >
//         <ProductContainer
//           category={searchParams.category}
//           search={searchParams.search} />
//       </Suspense>
//       <div className='container'><Map /></div>

//       <Footer />
//     </section>
//   )
// }

// export default HomePage;
import withSuspense from '@/components/withSuspense';
// import CategoriesList from './components/CategoriesList';
// import ProductContainer from './components/ProductContainer';
// import Map from './components/Map';
// import Footer from './components/Footer';
// import LoadingCards from './components/LoadingCards';

const Page = ({ searchParams }: { searchParams: any }) => {
  const SuspenseCategoriesList = withSuspense(CategoriesList);
  const SuspenseProductContainer = withSuspense(ProductContainer, <LoadingCards />);

  return (
    <section>
      <SuspenseCategoriesList
        category={searchParams.category}
        search={searchParams.search}
      />
      <SuspenseProductContainer
        category={searchParams.category}
        search={searchParams.search}
      />
      <div className='container'><Map /></div>
      <Footer />
    </section>
  );
};

export default Page;