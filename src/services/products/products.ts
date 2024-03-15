import {
  DeleteProductResponse,
  GetProductsResponse,
} from '@/services/products/types';

const URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (): Promise<GetProductsResponse> => {
  const response = await fetch(`${URL}/products`);

  return (await response.json()) as GetProductsResponse;
};

export const deleteProduct = async (id: string) => {
  const response = await fetch(`${URL}/products/${id}`, {
    method: 'DELETE',
  });

  return (await response.json()) as DeleteProductResponse;
};
