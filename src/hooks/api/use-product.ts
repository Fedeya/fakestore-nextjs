import { useQuery } from 'react-query';
import { getProduct } from '@/lib/api';

export const useProduct = (id: number) => {
  return useQuery(['products', id], () => getProduct(id), {
    enabled: !!id
  });
};
