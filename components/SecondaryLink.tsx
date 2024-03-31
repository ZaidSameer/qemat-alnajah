import { cn } from '@/lib/utils';
import Link from 'next/link'
import { FC } from 'react'

interface SecondaryLinkProps extends React.HTMLAttributes<HTMLAnchorElement>{
    href: string;
}

const SecondaryLink: FC<SecondaryLinkProps> = ({ href = "#", children, className, ...props }) => {
    return (
        <Link href={href} {...props} className={cn( "relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-white/60 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-110 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max", className)}>
            <span className="relative text-base font-semibold text-primary dark:text-white">{children}</span>
        </Link>
    )
}

export default SecondaryLink