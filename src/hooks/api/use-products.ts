import { useQuery } from 'react-query';
import { getProducts } from '@/lib/api';

export const useProducts = () => {
  return useQuery('products', getProducts);
};
