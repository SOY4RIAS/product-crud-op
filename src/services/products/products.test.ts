import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';

import { server } from '@/services/products/mocks/server';
import { getProducts } from '@/services/products';
import {
  createProduct,
  getProduct,
  updateProduct,
} from '@/services/products/products';

describe('products service', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('getProducts', async () => {
    const response = await getProducts(null);
    expect(response.products).toHaveLength(1);
    expect(response.total).toBe(1);
    expect(response.skip).toBe(0);
    expect(response.limit).toBe(10);
  });

  it('getProducts with search', async () => {
    const response = await getProducts('iPhone');
    expect(response.products).toHaveLength(1);
    expect(response.total).toBe(1);
    expect(response.skip).toBe(0);
    expect(response.limit).toBe(10);
  });

  it('getProduct', async () => {
    const response = await getProduct('1');

    expect(response).toEqual({
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      ],
    });
  });

  it('createProduct', async () => {
    const response = await createProduct({
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      ],
    });

    expect(response).toEqual({
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      ],
    });
  });

  it('updateProduct', async () => {
    const response = await updateProduct('1', {
      title: 'iPhone 90',
    });

    expect(response).toEqual({
      id: 1,
      title: 'iPhone 90',
    });
  });
});
