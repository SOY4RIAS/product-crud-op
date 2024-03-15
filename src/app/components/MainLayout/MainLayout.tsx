import { Navbar } from '@/app/components/MainLayout/Navbar';
import { Sidebar } from '@/app/components/MainLayout/Sidebar';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="w-full h-screen overflow-y-auto bg-slate-50">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
