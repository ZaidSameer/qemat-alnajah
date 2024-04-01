'use client'
import { Button } from '@/components/ui/button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
  message?: string;
}
export default function Error({ error, reset, message = "حدث خطأ ما!" }: ErrorProps) {

  return (
    <div className='absolute inset-0 flex flex-col items-center justify-center'>
      <h2 className="mb-4 text-3xl">{message}</h2>
      <Button color={'primary'} variant='default' className='py-2 px-6 rounded-full bg-primary hover:bg-primary/80 text-white transition-colors' onClick={ () => reset()}>
        المحاولة مرة أخرى
      </Button>
    </div>
  )
}