import { getPage } from 'next-page-tester';
import { screen } from '@testing-library/react';
import { products } from '@/../__mocks__/products';
import { getStaticPaths } from '@/pages/products/[id]';

describe('Product Page', () => {
  test('should render layout', async () => {
    const { render } = await getPage({
      route: '/products/1'
    });

    render();

    expect(
      screen.getByRole('link', {
        name: /store/i
      })
    ).toBeInTheDocument();
  });

  test('should render properly with id 1', async () => {
    const { render } = await getPage({
      route: '/products/1'
    });

    render();

    expect(
      screen.getByRole('heading', {
        name: products[0].title
      })
    ).toBeInTheDocument();

    expect(screen.getByText(products[0].description)).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /add to bag/i
      })
    ).toBeInTheDocument();
  });

  test('should render properly with id 2', async () => {
    const { render } = await getPage({
      route: '/products/2'
    });

    render();

    expect(
      screen.getByRole('heading', {
        name: products[1].title
      })
    ).toBeInTheDocument();

    expect(screen.getByText(products[1].description)).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /add to bag/i
      })
    ).toBeInTheDocument();
  });

  test('should render error 404 if product not exist', async () => {
    const { render } = await getPage({
      route: '/products/9999'
    });

    render();

    expect(
      screen.getByRole('heading', {
        name: /404/i
      })
    ).toBeInTheDocument();
  });

  test('should generate paths for the products', async () => {
    const { paths } = await getStaticPaths({});

    expect(paths).toEqual([
      {
        params: { id: '1' }
      },
      {
        params: { id: '2' }
      }
    ]);
  });
});
