'use client';

import { Bell, CircleChevronLeft, SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchStore } from '@/providers/SearchStoreProvider';

export function Navbar() {
  const router = useRouter();
  const setSearch = useSearchStore((state) => state.setSearch);

  const handleBack = () => {
    router.back();
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="flex h-20 w-full items-center px-4 md:px-6 bg-white">
      <Button size="icon" variant="ghost" onClick={handleBack}>
        <CircleChevronLeft className="w-6 h-6 text-gray-300" />
      </Button>
      <div className="hidden md:flex items-center gap-4 ml-auto">
        <div className="relative w-full max-w-sm rounded-lg px-3 py-2.5">
          <Input
            className="rounded-lg pr-10 placeholder:text-gray-300"
            placeholder="Search..."
            type="search"
            onChange={handleSearch}
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
