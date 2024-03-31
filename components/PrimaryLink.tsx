import { cn } from '@/lib/utils';
import Link from 'next/link'
import { FC } from 'react'

interface PrimaryLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    href: string;
}

const PrimaryLink: FC<PrimaryLinkProps> = ({ href = "#", children, className, ...props }) => {
    return (
        <Link href={href} {...props} className={cn(className, "relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-110 active:duration-75 active:before:scale-95 sm:w-max")}>
            <span className="relative text-base font-semibold text-white">{children}</span>
        </Link>
    )
}

export default PrimaryLink