import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createProduct } from '@/services/products/products';
import { GetProductsResponse } from '@/services/products';
import { useSearchStore } from '@/providers/SearchStoreProvider';
import { ProductSchema } from '@/app/products/components/ProductForm';

export const useCreateProduct = () => {
  const search = useSearchStore((state) => state.search);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ProductSchema) => {
      return createProduct({
        ...data,
        images: [data.image],
      });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(
        ['products', search],
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
