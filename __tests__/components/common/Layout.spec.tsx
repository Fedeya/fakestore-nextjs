import Layout from '@/components/common/Layout';
import { render, screen } from '@testing-library/react';

describe('Layout', () => {
  test('render the header', () => {
    render(<Layout />);

    expect(
      screen.getByRole('link', {
        name: /store/i
      })
    ).toBeInTheDocument();
  });

  test('render default title', () => {
    render(<Layout />);

    expect(document.title).toBe('Store');
  });

  test('render custom title', () => {
    render(<Layout title="Test" />);

    expect(document.title).toBe('Test - Store');
  });
});
