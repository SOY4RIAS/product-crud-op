'use client';

import Image from 'next/image';
import { LogOutIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { SIDEBAR_LINKS } from '@/app/components/MainLayout/constants';
import PeopleSvg from '@/assets/people.svg';
import { isRouteActive } from '@/lib/isRouteActive';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathName = usePathname();

  return (
    <aside
      className={cn(
        'w-80 h-full bg-orange-100 p-5 flex flex-col justify-between min-h-max overflow-y-auto',
        className
      )}
    >
      <div className="flex items-center">
        <span className="before:content-[''] before:border-l-4 before:mr-2 before:border-yellow-300 md:text-xl sm:text-lg uppercase font-semibold text-center">
          CRUD Operations
        </span>
      </div>
      <section className="grid pt-8 h-full">
        <div className="flex flex-col items-center">
          <Image
            src={PeopleSvg}
            alt="avatar image"
            className="rounded-full bg-gray-200"
            width={128}
            height={128}
            priority
            placeholder="empty"
          />
          <span className="text-lg font-semibold mt-4">Sarias</span>
          <span className="text-sm text-orange-400">Admin</span>
        </div>
        <ul className="w-full justify-self-center">
          {SIDEBAR_LINKS.map(({ name, path, icon: Icon }) => (
            <li key={name} className="mb-5">
              <Button
                variant={isRouteActive(pathName, path) ? 'default' : 'ghost'}
                className="flex w-full"
                asChild
              >
                <Link href={path} key={name}>
                  <Icon className="ml-auto mr-2" />
                  <span className="mr-auto text-start min-w-20">{name}</span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </section>
      <Button variant="ghost" className="w-full">
        <span className="mr-2">Logout</span>
        <LogOutIcon />
      </Button>
    </aside>
  );
}
