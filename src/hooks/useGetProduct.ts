import { useQuery } from '@tanstack/react-query';

import { getProduct } from '@/services/products/products';

export const useGetProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
    select: (data) => {
      return {
        ...data,
        image: data.images[0],
      };
    },
  });
};
