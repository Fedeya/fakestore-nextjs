import { rest } from 'msw';
import { products } from './products';

export const handlers = [
  rest.get('https://fakestoreapi.com/products', (req, res, ctx) => {
    return res(ctx.json(products));
  }),
  rest.get('https://fakestoreapi.com/products/:id', (req, res, ctx) => {
    const product = products.find(product => product.id === +req.params.id);

    return res(ctx.json(product || null));
  })
];
