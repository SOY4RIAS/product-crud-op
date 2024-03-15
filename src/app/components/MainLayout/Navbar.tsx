import { MenuIcon, PackageIcon } from 'lucide-react';
import Link from 'next/link';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Paths } from '@/lib/constants';

export function Navbar() {
  const linkSection = (
    <>
      <Link className="font-bold" href="#">
        Tab 1
      </Link>
      <Link className="text-gray-500 dark:text-gray-400" href="#">
        Tab 2
      </Link>
      <Link className="text-gray-500 dark:text-gray-400" href="#">
        Tab 3
      </Link>
    </>
  );

  return (
    <nav className="flex h-20 w-full items-center px-4 md:px-6">
      <Link className="flex items-center gap-2" href={Paths.HOME}>
        <PackageIcon className="h-6 w-6" />
        <span>Products-crud</span>
      </Link>
      <div className="hidden md:flex items-center gap-4 ml-auto">
        {linkSection}
      </div>
      <div className="ml-auto flex items-center md:hidden">
        <Sheet modal={true}>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="flex items-center gap-2" href={Paths.HOME}>
              <PackageIcon className="h-6 w-6" />
              <span>Products-crud</span>
            </Link>
            <div className="flex flex-col gap-4">{linkSection}</div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
