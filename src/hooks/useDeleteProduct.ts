import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteProduct } from '@/services/products/products';
import { GetProductsResponse } from '@/services/products';

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      queryClient.setQueryData(['products'], (old: GetProductsResponse) => {
        return {
          ...old,
          products: old.products.filter((product) => product.id !== data.id),
        };
      });
    },
  });
};
