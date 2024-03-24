"use client";

import * as React from "react";
import Link from "next/link";
import { Flower2, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./logo";
import Container from "./container";

export default function MainNav() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/" },
    { title: "About", path: "/inators" },
    { title: "Projects", path: "/docs" },
    { title: "Contact us", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <button
        className="pr-4 absolute md:hidden right-0 top-4"
        title="menu"
        onClick={() => setState(!state)}
      >
        <Menu />
      </button>
      <header className="px-4 py-3 shadow flex items-center justify-between  bg-white">
        <Container>
        <div className="flex items-center justify-between">
          {!state ? (
            <Link
              href="/"
              aria-label="Back to homepage"
              className=" flex md:justify-center justify-start items-center gap-3"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full text-white">
                <Logo />
              </div>
              <span className="self-center text-2xl font-semibold">
                Qemat Al-Najah
              </span>
              <span>شركة قمة النجاح</span>
            </Link>
          ) : null}
          <div className="flex justify-between">
            <div className="flex">
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
                  }`}
              >
                <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 mt-2 ml-5 font-semibold">
                  {menus.map((item, idx) => (
                    <li
                      key={idx}
                      className=" hover:text-primary text-base"
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
