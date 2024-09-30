import React from 'react';
import DashboardNavigation from '../components/dashboard/DashboardNavigation';
import MobileNavigation from '@/app/components/dashboard/MobileNavigation'; // Client-side mobile navigation
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { CircleUserIcon } from 'lucide-react';
import { getKindeServerSession, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  if (!user || user.email !== adminEmail) {
    return redirect('/');
  }

  return (
    <div className='flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <header className='sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white'>
        <nav className='hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm'>
          <DashboardNavigation />
        </nav>

        {/* Mobile navigation (client-side component) */}
        <MobileNavigation />

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'secondary'} size={'icon'} className='rounded-full'>
              <CircleUserIcon className='w-5 h-5' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <LogoutLink>Logout</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <main className='my-5'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
