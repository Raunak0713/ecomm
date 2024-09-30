import Link from 'next/link';
import React from 'react';

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Orders', href: '/dashboard/orders' },
  { name: 'Products', href: '/dashboard/products' },
  { name: 'Categories', href: '/dashboard/categories' }
];

// Add className prop along with onItemClick
const DashboardNavigation = ({ onItemClick, className }: { onItemClick?: () => void, className?: string }) => {
  return (
    <nav className={className ? className : 'flex gap-4'}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} onClick={onItemClick}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNavigation;
