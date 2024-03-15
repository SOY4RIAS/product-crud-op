import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <section className="flex items-center justify-between mb-2">
      <h2 className="text-xl font-bold">Products List</h2>
      <Button>Add new product</Button>
    </section>
  );
}
