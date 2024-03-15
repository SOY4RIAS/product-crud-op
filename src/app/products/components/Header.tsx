import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Paths } from '@/lib/constants';

interface HeaderProps {
  search: string | null;
}

export function Header({ search }: HeaderProps) {
  const title = search ? `Results for "${search}"` : 'Products List';

  return (
    <section className="flex items-center justify-between mb-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <Button asChild>
        <Link href={Paths.PRODUCT_CREATE}>Add new product</Link>
      </Button>
    </section>
  );
}
