import React, { Suspense } from 'react'
import ProductContainer from '@/components/home/ProductContainer';
import LoadingCards from '@/components/card/LoadingCards';
import Map from '@/components/map/map';
import Footer from '@/components/footer/Footer';
import CategoriesList from '@/components/home/CatgoriesList';
import ReviewContainer from '@/components/graphql/ReviewContainer';

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
        fallback={<LoadingCards />}
      >
        <ProductContainer
          category={searchParams.category}
          search={searchParams.search} />
      </Suspense>

      <ReviewContainer />
      <div className='container'><Map /></div>

      <Footer />
    </section>
  )
}

export default HomePage;


// interface SearchParams {
//   category?: string;
//   search?: string;
// }

// interface PageProps {
//   searchParams: SearchParams;
// }

// const HomePage: React.FC<PageProps> = ({ searchParams }) => {
//   return (
//     <section>
//       <CategoriesList
//         category={searchParams.category}
//         search={searchParams.search}
//       />
//       <Suspense fallback={<LoadingCards />}>
//         <ProductContainer
//           category={searchParams.category}
//           search={searchParams.search}
//         />
//       </Suspense>
//       <div className='container'><Map /></div>
//       <Footer />
//     </section>
//   );
// };

// HomePage.displayName = "HomePage";

// export default HomePage;