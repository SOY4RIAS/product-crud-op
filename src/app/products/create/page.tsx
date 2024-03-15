'use client';

import { useRouter } from 'next/navigation';

import { ProductForm } from '@/app/products/components';
import { ProductSchema } from '@/app/products/components/ProductForm';
import { useCreateProduct } from '@/hooks/useCreateProduct';

export default function CreateProductPage() {
  const { mutateAsync: createProduct } = useCreateProduct();
  const router = useRouter();

  const handleSubmit = (data: ProductSchema) => {
    createProduct(data).then(() => {
      router.push('/products');
    });
  };

  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <ProductForm onSubmit={handleSubmit} />
    </main>
  );
}
