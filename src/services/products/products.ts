import { GetProductsResponse } from '@/services/products/types';

const URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (): Promise<GetProductsResponse> => {
  const response = await fetch(`${URL}/products`);

  return (await response.json()) as GetProductsResponse;
};
