'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Orders', href: '/dashboard/orders' },
  { name: 'Products', href: '/dashboard/products' },
  { name: 'Categories', href: '/dashboard/categories' }
];

// Add className prop along with onItemClick
const DashboardNavigation = ({ onItemClick, className }: { onItemClick?: () => void, className?: string }) => {
  const pathname = usePathname()
  return (
    <nav className={className ? className : 'flex gap-4'}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} onClick={onItemClick} className={cn(link.href === pathname ? 'text-black' : 'text-muted-foreground hover:text-foreground')}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNavigation;
