import { render, screen } from '@testing-library/react';
import ProductList from '@/components/products/ProductList';
import { FC } from 'react';
import { rest } from 'msw';
import { server } from '@/../__mocks__/server';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

const wrapper: FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('ProductList', () => {
  test('should show loading indicator', () => {
    render(<ProductList />, { wrapper });

    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
  });

  test('show products when loading finishes', async () => {
    render(<ProductList />, { wrapper });

    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();

    const firstProduct = await screen.findByRole('img', {
      name: /testing product 1/i
    });

    const secondProduct = await screen.findByRole('img', {
      name: /testing product 2/i
    });

    expect(firstProduct).toBeInTheDocument();
    expect(secondProduct).toBeInTheDocument();
  });

  test('show error if the endpoint crash', async () => {
    queryClient.removeQueries();

    server.use(
      rest.get('https://fakestoreapi.com/products', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Testing Broken' }));
      })
    );

    render(<ProductList />, { wrapper });

    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();

    const errorText = await screen.findByText(/error getting products!/i);

    expect(errorText).toBeInTheDocument();
  });
});
