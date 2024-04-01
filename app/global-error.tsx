'use client' 
 
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col items-center justify-between h-screen'>
      <h2 className='font-bold text-3xl mb-4'>حدث خطأ ما!</h2>
      <Button onClick={() => reset()} variant="default" size="lg">
        المحاولة مرة أخرى
      </Button>
    </div>
  )
}