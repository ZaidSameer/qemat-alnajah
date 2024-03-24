"use client";

import * as React from "react";
import Link from "next/link";
import { Flower2, Menu } from "lucide-react";
import Logo from "@/components/logo";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";

export default function MainNav() {
  const [state, setState] = React.useState(false);
  const initialHeaderCss = "h-16 sm:h-24 shadow-none bg-white sm:bg-transparent"
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
    <div className={`fixed top-0 left-0 w-full z-[999]`}>
      <button className="pr-4 absolute md:hidden right-4 top-4"
        title="menu"
        onClick={() => setState(!state)}>
        <Menu />
      </button>
      <header className={`flex items-center ease-linear duration-300 ${headerCss}`}>
        <Container>
          <div className="flex items-center justify-between">
            {/* {!state ? ( */}

              <Link
                href="/"
                aria-label="Back to homepage"
                className=" flex md:justify-center justify-start items-center gap-3"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full text-white">
                  <Logo />
                </div>
                <span className="self-center text-xl sm:text-3xl font-semibold">
                  {config.title}
                </span>
                <span className="hidden sm:inline-block">شركة قمة النجاح</span>
              </Link>

            {/* ) : null} */}
            <div className="flex justify-between ">
              <div className="flex">
                <div
                  className={`flex-1 justify-self-center w-full absolute sm:relative left-0 sm:left-[auto] top-16 sm:top-[unset] transition-all duration-300 ease-linear md:block md:pb-0 md:mt-0 bg-white sm:bg-transparent p-5 ${state ? "block" : "hidden"
                    }`}
                >
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-semibold">
                    {config.mainMenu.map((item, index) => (
                      <li
                        key={index}
                        className=" hover:text-primary text-xl"
                      >
                        <Link href={item.path}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}
