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
    <main className="flex h-full flex-col items-center justify-between p-5 lg:p-24">
      {!isLoading && (
        <ProductForm
          onSubmit={handleSubmit}
          initialValues={data}
          title={'Edit Product'}
          description="Edit a product"
        />
      )}
    </main>
  );
}
