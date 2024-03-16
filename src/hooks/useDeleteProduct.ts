import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteProduct } from '@/services/products/products';
import { GetProductsResponse } from '@/services/products';
import { useSearchStore } from '@/providers/SearchStoreProvider';

export const useDeleteProduct = () => {
  const search = useSearchStore((state) => state.search);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      queryClient.setQueryData(
        ['products', search],
        (old: GetProductsResponse) => {
          return {
            ...old,
            products: old.products.filter((product) => product.id !== data.id),
          };
        }
      );
    },
  });
};
