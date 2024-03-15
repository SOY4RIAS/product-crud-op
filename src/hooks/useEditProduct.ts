import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateProduct } from '@/services/products/products';
import { ProductSchema } from '@/app/products/components/ProductForm';
import { GetProductsResponse } from '@/services/products';
import { useSearchStore } from '@/providers/SearchStoreProvider';

export const useEditProduct = (id: string) => {
  const search = useSearchStore((state) => state.search);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ProductSchema) => updateProduct(id, data),
    onSuccess: (data) => {
      queryClient.setQueryData(
        ['products', search],
        (old: GetProductsResponse) => {
          return {
            ...old,
            products: old.products.map((product) => {
              if (product.id === Number(id)) {
                return {
                  ...product,
                  ...data,
                };
              }

              return product;
            }),
          };
        }
      );
      queryClient.setQueryData(['product', id], data);
    },
  });
};
