import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react'; // assuming you're using Lucide icons

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  value: string | number;
  description: string;
  iconColor: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon: Icon, value, description, iconColor }) => {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between pb-2'>
        <CardTitle>{title}</CardTitle>
        <Icon className={`h-4 w-4 ${iconColor}`} />
      </CardHeader>
      <CardContent>
        <p className='text-2xl font-bold'>{value}</p>
        <p className='text-xs text-muted-foreground'>{description}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
