import { afterEach, describe, expect, it, vitest } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';

import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import ProductsPage from '@/app/products/page';

describe('products page', () => {
  afterEach(() => {
    vitest.clearAllMocks();
    cleanup();
  });

  // Renders the ProductList component with data from useGetProducts hook.
  it('should render the ProductList component with data from useGetProducts hook', async () => {
    // Mock the useSearchStore hook
    vitest.mock('@/providers/SearchStoreProvider', () => ({
      useSearchStore: vitest.fn().mockReturnValue({ search: 'test' }),
    }));

    // Mock the useGetProducts hook
    vitest.mock('@/hooks/useGetProducts', () => ({
      useGetProducts: vitest.fn().mockReturnValue({
        data: { products: [{ id: 1, title: 'Product 1' }] },
        isLoading: false,
      }),
    }));

    const app = render(
      <ReactQueryProvider>
        <ProductsPage />
      </ReactQueryProvider>
    );

    await waitFor(() => {
      expect(app.container?.querySelectorAll('tbody')[0]?.children.length).toBe(
        1
      );
      expect(screen.queryByText('Product 1')).toBeDefined();
    });
  });
});
