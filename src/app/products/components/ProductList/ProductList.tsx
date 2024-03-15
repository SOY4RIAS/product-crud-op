'use client';

import { Edit2Icon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { transformCurrency } from '@/lib/transforms';
import { useDeleteProduct } from '@/hooks/useDeleteProduct';

interface ProductListProps<T> {
  items: T[];
  columns: (keyof T[][0])[];
  imagePath: keyof T[][0];
  currencyFields?: (keyof T[][0])[];
}

export function ProductList<T>({
  items,
  columns,
  imagePath,
  currencyFields,
}: ProductListProps<T>) {
  const { mutate: deleteProduct } = useDeleteProduct();
  const getImage = (item: T) => {
    const image = item[imagePath];
    if (Array.isArray(image)) {
      return image[0];
    }

    return image as string;
  };

  return (
    <div className="pt-5 w-full h-full relative overflow-x-auto ">
      <table className="table-auto w-full border-separate border-spacing-y-3">
        <thead>
          <tr className="text-gray-400">
            <th></th>
            {columns?.map((column) => (
              <th
                key={column as string}
                className="px-4 font-normal text-start capitalize"
              >
                {column as string}
              </th>
            ))}
            <th colSpan={4}></th>
          </tr>
        </thead>
        <tbody className="h-full overflow-y-scroll">
          {items?.map((item: any) => (
            <tr key={item.id} className="bg-card rounded">
              <td className="p-4 rounded-l-lg min-w-24">
                <Image
                  src={getImage(item)}
                  alt={`${item.title} image`}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </td>
              {columns?.map((column) => (
                <td
                  key={column as string}
                  className="p-4 text-start font-light"
                >
                  {currencyFields?.includes(column)
                    ? transformCurrency(item[column])
                    : item[column]}
                </td>
              ))}
              <td>
                <Button variant="ghost" onClick={() => null}>
                  <Edit2Icon className="text-primary" />
                </Button>
              </td>
              <td className="rounded-r-lg">
                <Button variant="ghost" onClick={() => deleteProduct(item.id)}>
                  <Trash2Icon className="text-primary" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
