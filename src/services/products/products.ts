import {
  DeleteProductResponse,
  GetProductsResponse,
  Product,
} from '@/services/products/types';

const URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (): Promise<GetProductsResponse> => {
  const response = await fetch(`${URL}/products`);

  return (await response.json()) as GetProductsResponse;
};

export const getProduct = async (id: string) => {
  const response = await fetch(`${URL}/products/${id}`);

  return (await response.json()) as Product;
};

export const createProduct = async (data: Partial<Product>) => {
  const response = await fetch(`${URL}/products/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return (await response.json()) as Product;
};

export const updateProduct = async (id: string, data: Partial<Product>) => {
  const purgedData = Object.fromEntries(
    Object.entries(data).filter(([k]) => k !== 'id')
  );

  const response = await fetch(`${URL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(purgedData),
  });

  return (await response.json()) as Product;
};

export const deleteProduct = async (id: string) => {
  const response = await fetch(`${URL}/products/${id}`, {
    method: 'DELETE',
  });

  return (await response.json()) as DeleteProductResponse;
};
