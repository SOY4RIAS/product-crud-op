import { Hourglass } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <h2 className="text-4xl font-bold">Not Found</h2>
      <Hourglass className="h-16 w-16 text-red-500 animate-hourglass-spin" />
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </main>
  );
}
