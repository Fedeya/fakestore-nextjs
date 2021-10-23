import { client } from './client';
import { Product } from './types';

export const getProducts = async () => {
  const res = await client.get<Product[]>('/products');

  return res.data;
};

export const getProduct = async (id: number) => {
  const res = await client.get<Product>(`/products/${id}`);

  return res.data;
};
