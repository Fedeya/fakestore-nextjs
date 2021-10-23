import { getPage } from 'next-page-tester';
import { screen } from '@testing-library/react';

describe('Home Page', () => {
  test('should render layout', async () => {
    const { render } = await getPage({
      route: '/'
    });

    render();

    expect(
      screen.getByRole('link', {
        name: /store/i
      })
    ).toBeInTheDocument();
  });

  test('should render product list', async () => {
    const { render } = await getPage({
      route: '/'
    });

    render();

    expect(
      screen.getAllByRole('img', {
        name: /testing product 1/i
      })[0]
    ).toBeInTheDocument();
  });
});
