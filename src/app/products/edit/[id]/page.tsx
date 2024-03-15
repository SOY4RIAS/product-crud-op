'use client';

import { useRouter } from 'next/navigation';

import { ProductForm } from '@/app/products/components';
import { ProductSchema } from '@/app/products/components/ProductForm';
import { useEditProduct } from '@/hooks/useEditProduct';
import { useGetProduct } from '@/hooks/useGetProduct';
import { Paths } from '@/lib/constants';

interface EditProductPageProps {
  params: {
    id: string;
  };
}

export default function EditProductPage({
  params: { id },
}: EditProductPageProps) {
  const router = useRouter();
  const { data, isLoading } = useGetProduct(id);
  const { mutateAsync: editProduct } = useEditProduct(id);

  const handleSubmit = (data: ProductSchema) => {
    editProduct(data).then(() => {
      router.push(Paths.PRODUCTS);
    });
  };

  return (
    <main>
      <h1>Edit Product</h1>
      {!isLoading && (
        <ProductForm onSubmit={handleSubmit} initialValues={data} />
      )}
    </main>
  );
}
