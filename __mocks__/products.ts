import { Category, Product } from '@/lib/types';

export const products: Product[] = [
  {
    category: Category.Electronics,
    description: 'Testing Category',
    id: 1,
    image: 'https://images.com/image.png',
    price: 10,
    rating: {
      count: 100,
      rate: 3.5
    },
    title: 'Testing Product 1'
  },
  {
    category: Category.Electronics,
    description: 'Testing Bro',
    id: 2,
    image: 'https://images.com/image.png',
    price: 20,
    rating: {
      count: 200,
      rate: 4.5
    },
    title: 'Testing Product 2'
  }
];
