import { Page } from '@/lib/page';
import { ProductList } from '@/components/products';
import { Layout } from '@/components/common';
import { getProducts } from '@/lib/api';
import { GetStaticProps } from 'next';
import { QueryClient, dehydrate } from 'react-query';

const Home: Page = () => {
  return (
    <div className="p-4">
      <ProductList />
    </div>
  );
};

Home.getLayout = page => <Layout>{page}</Layout>;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('products', () => getProducts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export default Home;
