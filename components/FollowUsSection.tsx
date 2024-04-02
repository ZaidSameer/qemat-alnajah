import { FC } from 'react'
import Container from './container'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { FacebookIcon, Instagram } from 'lucide-react'
import { config } from '@/lib/config'
import { SVGFacebookIcon, SVGTelegramIcon } from './icons'

interface FollowUsSectionProps {

}

const FollowUsSection: FC<FollowUsSectionProps> = ({ }) => {

    const { socialMedia } = config;
    return (
        <section className="py-14 bg-primary text-gray-50">
            <Container className="flex items-center justify-between flex-col md:flex-row">
                <div className="flex flex-col space-y-2 text-center sm:text-left mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold leading-none">
                        Follow on Social Media for more project updates
                    </h2>
                    <p className="text-white/60 text-lg lg:px-0">
                        When we add something new, you will be the first to know.
                    </p>
                </div>

                <div className="flex flex-row items-center self-center justify-center flex-shrink-0 lg:justify-end gap-4">
                    <Link href={socialMedia.facebookURL} className={`${buttonVariants({ variant: "outline", size: "icon" })}  !rounded-full bg-primary border-0 `}>
                            <SVGFacebookIcon className="size-6" />
                    </Link>

                    <Link href={socialMedia.facebookURL} target='_blank' title="Facebook"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-gray-50"
                    >
                        <SVGFacebookIcon className="size-6 fill-white" />
                    </Link>

                    <Link href={socialMedia.telegramURL} className={`${buttonVariants({ variant: "outline", size: "icon", })}  !rounded-full bg-primary border-0`}>
                        <SVGTelegramIcon className="size-6 fill-white" />
                    </Link>

                    <Link href={socialMedia.instagramURL} className={`${buttonVariants({ variant: "outline", size: "icon" })}  !rounded-full bg-primary border-0 !stroke-white `}>
                        <Instagram className="size-6 stroke-white" />
                    </Link>

                </div>
            </Container>
        </section>
    )
}

export default FollowUsSection