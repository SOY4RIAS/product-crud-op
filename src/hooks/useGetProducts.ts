import { useQuery } from '@tanstack/react-query';

import { getProducts } from '@/services/products';

export const useGetProducts = (search: string | null) => {
  return useQuery({
    queryKey: ['products', search],
    queryFn: () => getProducts(search),
    enabled: true,
  });
};
