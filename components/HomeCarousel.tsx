'use client';

import { FC } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Container from './container';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import * as React from "react"
import { sliderImages } from '@/data';
import PrimaryLink from './PrimaryLink';
import SecondaryLink from './SecondaryLink';
import { DotButton } from './EmbalaCarouselButtons';

interface HomeCarouselProps { }

const HomeCarousel: FC<HomeCarouselProps> = ({ }) => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )
    const buttonsCss = "relative left-[unset] right-[unset] bottom-[unset] translate-x-0 translate-y-0";

    return (
        <section className='overflow-hidden'>
            <Carousel
                opts={{ align: "start", loop: true, skipSnaps: false }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                orientation="horizontal"
                className="w-screen"
            >
                <CarouselContent className='-ml-1'>
                    {sliderImages.map(({ prefixText, image, title, description, tagLine, actions }, index) => (
                        <CarouselItem key={index} style={{ backgroundImage: `url(${image})` }} className="pl-1 py-6 sm:py-20 relative bg-cover bg-no-repeat">
                            <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-hue-rotate-15 bg-white/70 z-[1]" />
                            <Container>
                                <div className='flex min-h-screen flex-col justify-center text-center lg:text-left leading-snug relative z-10 max-w-2xl'>

                                    {prefixText ? (
                                        <p className='text-primary mb-2 text-base'>{prefixText}</p>
                                    ) : null}
                                    {title ? (
                                        <h2 className='text-4xl font-bold sm:text-5xl leading-snug mb-2'>
                                            <span className="text-primary leading-snug">{title}</span>
                                        </h2>
                                    ) : null}
                                    {tagLine ? (
                                        <p className="mb-4 text-3xl font-bold sm:mb-8 leading-snug">{tagLine}</p>
                                    ) : null}
                                    {description ? (
                                        <div className="flex justify-center items-center md:justify-start w-full md:max-w-3xl">
                                            <p className="mb-8 text-lg leading-snug text-gray-600">
                                                {description}
                                            </p>

                                        </div>
                                    ) : null}
                                    {actions ? (
                                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                            {actions.primary && actions.primary.url && (
                                                <PrimaryLink href={actions.primary.url}>
                                                    {actions.primary.label}
                                                </PrimaryLink>
                                            )}
                                            {actions.secondary && actions.secondary.url && (
                                                <SecondaryLink href={actions.secondary.url}>
                                                    {actions.secondary.label}
                                                </SecondaryLink>
                                            )}

                                        </div>
                                    ) : null}
                                </div>
                            </Container>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute right-10 bottom-10 gap-4 flex items-center flex-row justify-center z-10">
                    <CarouselPrevious className={cn(buttonsCss, "")} variant={"default"} />
                    <CarouselNext className={cn(buttonsCss, "")} variant={"default"} />
                </div>
            </Carousel>
        </section>
    )
}

export default HomeCarousel