import { getProduct, getProducts } from '@/lib/api';

describe('getProducts', () => {
  test('should get all products', async () => {
    const products = await getProducts();

    expect(products[0].id).toBe(1);
    expect(products[1].id).toBe(2);
  });
});

describe('getProduct', () => {
  test('should get product with id 1', async () => {
    const product = await getProduct(1);

    expect(product.id).toBe(1);
  });

  test('should get product with id 2', async () => {
    const product = await getProduct(2);

    expect(product.id).toBe(2);
  });
});
