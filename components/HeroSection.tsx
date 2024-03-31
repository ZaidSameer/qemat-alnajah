import { FC } from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import Container from "@/components/container";
import { config } from "@/lib/config";
import { cn } from "@/lib/utils";


interface HeroSectionProps {
  
}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  const {images} = config;

  return (
    <section id="home" className="relative" style={{ backgroundImage: `url(${images.heroImage.src})` }}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/50 z-[1]" />
        <Container>
          <div className="flex min-h-screen flex-col justify-center text-center lg:text-left leading-snug relative z-10 pt-20">
            <p className="mb-2 text-base text-primary">Since 2005</p>
            <h1 className="text-4xl font-bold sm:text-5xl leading-snug">
              <span className="text-primary leading-snug"> {config.title} </span>
            </h1>
            <p className="mb-4 text-3xl font-bold sm:mb-8 leading-snug">
              General Trading & Supply Contracting Company
            </p>{" "}
            <div className="flex justify-center items-center md:justify-start w-full md:max-w-3xl">
              <div className="mb-8 text-lg leading-snug text-gray-600">
                <strong className="text-black">Qemah Al-Najah Co.</strong>  It is the name behind many Iraq’s most advanced and prestigious facilities. The
                company was established in 1998. And it is headquartered in Baghdad. Over the years, the group has
                un- retaken many challenging projects and accumulated skills.
              </div>

            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link href="#contact" className={cn(buttonVariants({ variant: "default" }))}>
                Contact us
              </Link>
              <Link href="#about" className={cn(buttonVariants({ variant: "secondary" }))}>
                Read more
              </Link>
            </div>
          </div>

        </Container>
      </section>
  )
}

export default HeroSection