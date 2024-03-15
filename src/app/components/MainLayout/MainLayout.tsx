import { Navbar } from '@/app/components/MainLayout/Navbar';
import { Sidebar } from '@/app/components/MainLayout/Sidebar';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="w-full overflow-y-hidden">
        <Navbar />
        <div className="overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  );
}
