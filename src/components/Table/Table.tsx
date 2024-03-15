import { Edit2Icon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

interface TableProps<T> {
  items: T[];
  columns: (keyof T[][0])[];
  getImage: (item: T[][0]) => string;
  currencyFields?: (keyof T[][0])[];
}

export function Table<T extends object>({
  items,
  columns,
  getImage,
  currencyFields,
}: TableProps<T>) {
  const handleCurrencyTransform = (value: string) => {
    return Number(value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
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
                    ? handleCurrencyTransform(item[column])
                    : item[column]}
                </td>
              ))}
              <td>
                <Button variant="ghost">
                  <Edit2Icon className="text-primary" />
                </Button>
              </td>
              <td className="rounded-r-lg">
                <Button variant="ghost">
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