import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الصفحة غير موجودة',
  description: '',
}

const PageNotFound = () => {
  return (
    <div className="grid h-screen place-content-center bg-gray-200 px-4" >
      <div className="text-center">
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          الخطأ ٤٠٤
        </h1>
        <p className="mt-4 mb-8 text-gray-500">
          عذراً، لقد أتبعت رابط خاطئ
        </p>
        <Button variant={'default'} size="lg" asChild>
          <Link href="/">الذهاب للرئيسية</Link>
        </Button>
      </div>
    </div>
  )
}

export default PageNotFound