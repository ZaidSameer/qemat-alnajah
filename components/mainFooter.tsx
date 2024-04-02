import { AtSign, Facebook, Instagram } from 'lucide-react';
import React from 'react'
import Link from 'next/link';
import { config } from '@/lib/config';
import { SVGFacebookIcon, SVGTelegramIcon } from './icons';
import { buttonVariants } from './ui/button';

const MainFooter = () => {
  const { socialMedia } = config;
  return (
    <div className="mt-10 shadow-md bg-gray-900">
      <footer className="py-6 text-gray-500 w-full">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="flex items-center justify-between">
            <div className="col-span-full md:pb-0 md:col-span-6">
              <Link href="/" className="flex justify-center space-x-3 md:justify-start text-base font-semibold">
                {config.title}
              </Link>
              <p className='text-sm'>Copyright © 2005 - {new Date().getFullYear()}</p>
            </div>
            <div className="flex justify-center space-x-4 lg:pt-0 lg:col-end-13">
              <a href={config.mainEmail} title="Email"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-gray-50"
              >
                <AtSign className="size-6" />
              </a>

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
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainFooter