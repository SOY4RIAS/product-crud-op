import { Header } from '@/app/products/components';
import { Table } from '@/components/Table';
import { getProducts } from '@/services/products';

export default async function ProductsPage() {
  const { products } = await getProducts();

  return (
    <main className="p-6 divide-y">
      <Header />
      <Table
        items={products}
        columns={['title', 'description', 'price', 'stock', 'brand']}
        getImage={(item) => item.images[0]}
        currencyFields={['price']}
      />
    </main>
  );
}
