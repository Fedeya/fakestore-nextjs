import { FC } from 'react';
import { useProducts } from '@/hooks/api';
import Image from 'next/image';
import Link from 'next/link';
import s from './ProductList.module.css';

const ProductList: FC = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error getting products!</p>;

  return (
    <div className={s.root}>
      {data!.map(product => (
        <div key={product.id} className="group relative">
          <div className={s.image}>
            <div className={s.imageWrap}>
              <Image layout="fill" src={product.image} alt={product.title} />
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <Link href={`/products/${product.id}`}>
                  <a>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </a>
                </Link>
              </h3>
              <p className={s.rate}>{product.rating.rate}</p>
            </div>
            <p className={s.price}>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
