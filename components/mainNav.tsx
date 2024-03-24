"use client";

import * as React from "react";
import Link from "next/link";
import { AlignRight, Flower2, Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";

export default function MainNav() {
  const [state, setState] = React.useState(false);
  const initialHeaderCss = "h-20 sm:h-24 shadow-none bg-transparent"
  const [headerCss, setHeaderCss] = React.useState(initialHeaderCss)

  React.useEffect(() => {
    const changeNavigationCss = () => {

      if (window.scrollY >= 100) {
        setHeaderCss('shadow-lg h-[60px] bg-white')
      } else {
        setHeaderCss(initialHeaderCss)
      }
    };

    window.addEventListener('scroll', changeNavigationCss)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-[999] flex items-center ease-linear duration-300 ${headerCss}`}>
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Back to Top"
          className=" flex md:justify-center justify-start items-center gap-3"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-white/50 rounded-full">
            <Logo />
          </div>

          <span className="self-center text-xl sm:text-3xl font-semibold">
            {config.title}
          </span>
          <span className="hidden lg:inline-block">شركة قمة النجاح</span>
        </Link>

        {/* ) : null} */}
        <div className="flex justify-between">
          <div
            className={`flex-1 justify-self-center w-full absolute sm:relative left-0 sm:left-[auto] top-16 sm:top-[unset] transition-all duration-300 ease-linear md:block md:pb-0 md:mt-0 bg-white sm:bg-transparent px-8 py-6 sm:p-0 ${state ? "block" : "hidden"
              }`}
          >
            <ul className="justify-center items-center md:flex md:space-x-6 md:space-y-0 font-semibold">
              {config.mainMenu.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-primary text-xl border-b sm:border-0 last:border-0 py-4"
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button className="flex md:hidden"
          title="menu"
          aria-label="Toggle menu"
          size={"icon"}
          variant={"ghost"}
          onClick={() => setState(!state)}>
          {!state ? <AlignRight className="size-6" /> : <X className="size-6" />}
        </Button>
      </Container>
    </header>
  );
}
