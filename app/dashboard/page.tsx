import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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

      <div className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10'>
        <Card className='xl:col-span-2'>
          <CardHeader>
            <CardTitle>Transaction</CardTitle>
            <CardDescription>
              Recent transactions from your store
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-8'>

            <div className='flex items-center gap-4'>
              <Avatar className='hidden sm:flex'>
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium'>Raunak Bhanarkar</p>
                <p className='text-sm text-muted-foreground'>test@test.com</p>
              </div>
              <p className='ml-auto font-medium'>+$1,999</p>
            </div>

            <div className='flex items-center gap-4'>
              <Avatar className='hidden sm:flex'>
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium'>Raunak Bhanarkar</p>
                <p className='text-sm text-muted-foreground'>test@test.com</p>
              </div>
              <p className='ml-auto font-medium'>+$1,999</p>
            </div>

            <div className='flex items-center gap-4'>
              <Avatar className='hidden sm:flex'>
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium'>Raunak Bhanarkar</p>
                <p className='text-sm text-muted-foreground'>test@test.com</p>
              </div>
              <p className='ml-auto font-medium'>+$1,999</p>
            </div>

            <div className='flex items-center gap-4'>
              <Avatar className='hidden sm:flex'>
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>
              <div className='grid gap-1'>
                <p className='text-sm font-medium'>Raunak Bhanarkar</p>
                <p className='text-sm text-muted-foreground'>test@test.com</p>
              </div>
              <p className='ml-auto font-medium'>+$1,999</p>
            </div>

          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Dashboard


//