import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Paths } from '@/lib/constants';

export function Header() {
  return (
    <section className="flex items-center justify-between mb-2">
      <h2 className="text-xl font-bold">Products List</h2>
      <Button asChild>
        <Link href={Paths.PRODUCT_CREATE}>Add new product</Link>
      </Button>
    </section>
  );
}
