import { FC, HTMLAttributes, ImgHTMLAttributes } from 'react'
import Container from './container'
import { cn } from '@/lib/utils'
import Image from "next/image";
import Link from "next/link";
import { DessertIcon } from 'lucide-react';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

interface MediaSectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}
// MediaSection Component
const MediaSection: FC<MediaSectionProps> = ({ children, className, ...props }) => {
    return (
        <section {...props} className={cn('py-20 bg-gray-300', className)}>
            <Container>
                <div className='flex flex-col lg:flex-row gap-8'>
                    {children}
                </div>
            </Container>
        </section>
    );
};

// MediaSectionTitle Component
const MediaSectionTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ children, className, ...props }, ref) => {
        return (
            <div className='flex flex-col justify-center flex-1 lg:flex-2'>
                <h2 ref={ref} className={cn('text-3xl font-bold mb-5', className)} {...props}>
                    {children}
                </h2>
            </div>
        );
    }
);
MediaSectionTitle.displayName = 'MediaSectionTitle';


// MediaSectionTitleTagline Component
const MediaSectionTitleTagline = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
    ({ children, className, ...props }, ref) => {
        return (
            <span ref={ref} className={cn('text-3xl font-bold mb-5', className)} {...props}>
                    {children}
            </span>
        );
    }
);

MediaSectionTitleTagline.displayName = 'MediaSectionTitleTagline';

// MediaSectionImage Component
// Note: The 'src' and 'alt' props are required for the Image component.
type MediaSectionImageProps = {
    src: string;
    alt: string;
    width: number | `${number}`;
    height: number | `${number}`;
    className?: string;
};

const MediaSectionImage = React.forwardRef<HTMLDivElement, MediaSectionImageProps>(
    ({ src, alt, width, height, className }, ref) => {
        return (
            <div ref={ref} className={cn('mb-8 lg:flex-3 lg:justify-start lg:mb-0', className)}>
                <Image src={src} alt={alt} width={width} height={height} className={cn("rounded-sm")} />
            </div>
        );
    }
);

MediaSectionImage.displayName = 'MediaSectionImage';

export { MediaSection, MediaSectionTitle,MediaSectionTitleTagline,  MediaSectionImage };


// interface MediaSectionProps extends HTMLAttributes<HTMLElement> {
//     imageSrc: string;
//     title?: string;
//     description?: string;
//     tagLine?: string;
//     imageLeft: boolean;
// }

// const MediaSection: FC<MediaSectionProps> = ({
//     children, imageSrc, title, description, tagLine, imageLeft = true, className, ...props
// }) => {
//     return (
//         <section {...props} className={cn('py-20 bg-gray-100', className)} {...props}>
//             <Container>
//                 <div className="flex flex-col lg:flex-row gap-8">
//                     {imageLeft ? (
//                         <>
//                             <div className="mb-8 lg:flex-3 lg:justify-start lg:mb-0">
//                                 <Image
//                                     src={imageSrc}
//                                     alt="Company Overview"
//                                     height={500}
//                                     width={500}
//                                     className="rounded-sm"
//                                 />
//                             </div>
//                             <div className="flex flex-col justify-center flex-1 lg:flex-2">
//                                 <span className="mb-3 text-xs tracking-widest uppercase text-primary">
//                                     {tagLine}
//                                 </span>
//                                 <h2 className="text-3xl font-bold mb-5">{title}</h2>
//                                 <p className="text-gray-600 leading-snug text-bass">
//                                     {description}
//                                 </p>
//                             </div>
//                         </>
//                     ) : (
//                         <>
//                             <div className="flex flex-col justify-center flex-1 lg:flex-2">
//                                 <span className="mb-3 text-xs tracking-widest uppercase text-primary">
//                                     {tagLine}
//                                 </span>
//                                 <h2 className="text-3xl font-bold mb-5">{title}</h2>
//                                 <p className="text-gray-600 leading-snug text-bass">
//                                     {description}
//                                 </p>
//                             </div>
//                             <div className="mb-8 lg:flex-3 lg:justify-start lg:mb-0">
//                                 <Image
//                                     src={imageSrc}
//                                     alt="Company Overview"
//                                     height={500}
//                                     width={500}
//                                     className="rounded-sm"
//                                 />
//                             </div>
//                         </>
//                     )}

//                 </div>
//                 {children}
//             </Container>
//         </section>
//     )
// }

// export default MediaSection