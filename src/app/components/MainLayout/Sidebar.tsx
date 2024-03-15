'use client';

import Image from 'next/image';
import { LogOutIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { SIDEBAR_LINKS } from '@/app/components/MainLayout/constants';

export function Sidebar() {
  const pathName = usePathname();

  return (
    <aside className="w-80 h-full bg-orange-100 p-5 flex flex-col justify-between min-h-max overflow-y-auto">
      <span className="before:content-[''] before:border-l-4 before:mr-2 before:border-yellow-300 text-2xl uppercase font-semibold text-nowrap">
        CRUD Operations
      </span>
      <section className="grid pt-8 h-full">
        <div className="flex flex-col items-center">
          <Image
            src="/people.svg"
            alt="avatar image"
            className="rounded-full bg-gray-200"
            width={128}
            height={128}
          />
          <span className="text-lg font-semibold">Sarias</span>
          <span className="text-sm text-orange-400">Admin</span>
        </div>
        <ul className="w-full justify-self-center">
          {SIDEBAR_LINKS.map(({ name, path, icon: Icon }) => (
            <li key={name} className="mb-5">
              <Button
                variant={pathName === path ? 'default' : 'ghost'}
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
