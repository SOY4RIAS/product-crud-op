import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateProduct } from '@/services/products/products';
import { ProductSchema } from '@/app/products/components/ProductForm';
import { GetProductsResponse } from '@/services/products';

export const useEditProduct = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ProductSchema) => updateProduct(id, data),
    onSuccess: (data) => {
      queryClient.setQueryData(['products'], (old: GetProductsResponse) => {
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
      });
      queryClient.setQueryData(['product', id], data);
    },
  });
};
