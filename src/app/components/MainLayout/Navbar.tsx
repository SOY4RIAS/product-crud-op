'use client';

import { CircleChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export function Navbar() {
  const router = useRouter();

  const canGoBack = () => window.history.length > 1;

  const handleBack = () => {
    if (canGoBack()) {
      router.back();
    }
  };

  return (
    <nav className="flex h-20 w-full items-center px-4 md:px-6 bg-white">
      <Button
        size="icon"
        variant="ghost"
        onClick={handleBack}
        disabled={!canGoBack()}
      >
        <CircleChevronLeft className="w-6 h-6 text-gray-300" />
      </Button>
      <div className="hidden md:flex items-center gap-4 ml-auto"></div>
    </nav>
  );
}
