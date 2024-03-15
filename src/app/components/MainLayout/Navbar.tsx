'use client';

import { Bell, CircleChevronLeft, MenuIcon, SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchStore } from '@/providers/SearchStoreProvider';
import { Paths } from '@/lib/constants';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Sidebar } from '@/app/components/MainLayout/Sidebar';

export function Navbar() {
  const router = useRouter();
  const setSearch = useSearchStore((state) => state.setSearch);

  const handleBack = () => {
    router.back();
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(Paths.PRODUCTS);
    }
  };

  return (
    <nav className="flex h-20 w-full items-center px-4 md:px-6 bg-white">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="p-0 md:hidden">
          <Sidebar className="w-full" />
        </SheetContent>
      </Sheet>
      <Button size="icon" variant="ghost" onClick={handleBack}>
        <CircleChevronLeft className="w-6 h-6 text-gray-300" />
      </Button>
      <div className="flex items-center gap-4 ml-auto">
        <div className="relative w-full max-w-sm rounded-lg px-3 py-2.5">
          <Input
            className="rounded-lg pr-10 placeholder:text-gray-300"
            placeholder="Search..."
            type="search"
            onChange={handleSearch}
            onKeyDown={handleEnter}
          />
          <SearchIcon className="absolute top-1/2 right-8 transform -translate-y-1/2 w-5 h-5 stroke-2.5 text-gray-300" />
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="w-6 h-6 text-gray-300" />
        </Button>
      </div>
    </nav>
  );
}
