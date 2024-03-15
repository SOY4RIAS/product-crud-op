import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createProduct } from '@/services/products/products';
import { GetProductsResponse } from '@/services/products';

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      queryClient.setQueryData(
        ['products'],
        (old: Partial<GetProductsResponse> = {}) => {
          return {
            ...old,
            products: [data, ...(old.products || [])],
          };
        }
      );
    },
  });
};
