import { useQuery } from '@tanstack/react-query';

import { getProducts, GetProductsResponse } from '@/services/products';

export const useGetProducts = (initialData?: GetProductsResponse) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    enabled: true,
    initialData,
  });
};
