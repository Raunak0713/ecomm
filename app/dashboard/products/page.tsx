import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ProductsPage = () => {
  return (
    <>
      <div className='flex items-center justify-end'>
        <Button asChild variant={'secondary'} className='flex items-center gap-x-2'>
          <Link href={'/dashboard/products/create'}>
            <PlusCircle className='h-5 w-5'/>
            <span>Add Product</span>
          </Link>
        </Button>
      </div>
      <Card className='mt-5'>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  )
}

export default ProductsPage