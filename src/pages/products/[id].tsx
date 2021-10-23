import { Page } from '@/lib/page';
import { useProduct } from '@/hooks/api';
import { GetStaticPaths, GetStaticProps } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { Layout } from '@/components/common';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getProduct, getProducts } from '@/lib/api';

const Product: Page = () => {
  const router = useRouter();
  const { data } = useProduct(+(router.query.id as string));

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="h-screen relative">
          <Image src={data!.image} alt={data!.title} layout="fill" />
        </div>
      </div>

      <div className="w-full p-5">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            {data?.title}
          </h1>
        </div>

        <div className="space-y-6 mt-3">
          <p className="text-base text-gray-900">{data?.description}</p>
        </div>

        <p className="text-3xl mt-4 text-gray-900">Price: ${data?.price}</p>

        <button
          type="submit"
          className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add to bag
        </button>
      </div>
    </div>
  );
};

Product.getLayout = page => <Layout>{page}</Layout>;

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts();

  return {
    paths: products.map(product => ({
      params: { id: product.id.toString() }
    })),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  const product = await queryClient.fetchQuery(
    ['products', +(params?.id as string)],
    () => getProduct(+(params?.id as string))
  );

  if (!product) {
    return {
      props: {},
      notFound: true
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export default Product;
