'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import DashboardNavigation from '../dashboard/DashboardNavigation';

const MobileNavigation = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button className='shrink-0 md:hidden' variant={'outline'} size={'icon'}>
          <MenuIcon className='h-5 w-5' />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <nav className='flex flex-col gap-6 text-lg font-medium mt-5'>
          {/* Adding space between the links using gap in flex */}
          <DashboardNavigation onItemClick={closeSheet} className="flex flex-col space-y-4" />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
