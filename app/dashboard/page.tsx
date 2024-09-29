import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DashboardCard from '@/utils/dashboard/DashboardCard'
import { DollarSign, ShoppingBag, PartyPopper, User2 } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
        <DashboardCard title='Total Revenue' icon={DollarSign} value='$100,000' description='Based on 100 Charges' iconColor='text-green-500'/>
        <DashboardCard title='Total Sales' icon={ShoppingBag} value='+50' description='Total Sales on Website' iconColor='text-blue-500'/>
        <DashboardCard title='Total Products' icon={PartyPopper} value='37' description='Total Products Created' iconColor='text-indigo-500'/>
        <DashboardCard title='Total Users' icon={User2} value='120' description='Total Users Signed Up' iconColor='orange'/>
      </div>
    </>
  )
}

export default Dashboard


//