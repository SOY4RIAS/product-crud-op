import {
  DeleteProductResponse,
  GetProductsResponse,
  Product,
} from '@/services/products/types';

const API = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (
  search: string | null
): Promise<GetProductsResponse> => {
  const url = new URL(`${API}/products`);

  if (search) {
    url.pathname = `${url.pathname}/search`;
    url.searchParams.append('q', search);
  }

  const response = await fetch(url);

  return (await response.json()) as GetProductsResponse;
};

export const getProduct = async (id: string) => {
  const response = await fetch(`${API}/products/${id}`);

  return (await response.json()) as Product;
};

export const createProduct = async (data: Partial<Product>) => {
  const response = await fetch(`${API}/products/add`, {
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

  const response = await fetch(`${API}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(purgedData),
  });

  return (await response.json()) as Product;
};

export const deleteProduct = async (id: string) => {
  const response = await fetch(`${API}/products/${id}`, {
    method: 'DELETE',
  });

  return (await response.json()) as DeleteProductResponse;
};
