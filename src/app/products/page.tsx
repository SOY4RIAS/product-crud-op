'use client';

import { LoaderIcon } from 'lucide-react';

import { Header, ProductList } from '@/app/products/components';
import { useGetProducts } from '@/hooks/useGetProducts';

export default function ProductsPage() {
  const { data, isLoading } = useGetProducts();

  return (
    <main className="p-6 divide-y relative">
      <Header />
      {isLoading ? (
        <div className="flex justify-center items-center h-lvh w-full">
          <LoaderIcon className="animate-spin" size={32} />
        </div>
      ) : (
        <ProductList
          items={data?.products || []}
          columns={['title', 'description', 'price', 'stock', 'brand']}
          imagePath={'images'}
          currencyFields={['price']}
        />
      )}
    </main>
  );
}
