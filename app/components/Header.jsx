"use client";
import { useState } from "react";
import Image from "next/image";
import { navigation } from "../data";
import NavLinks from "./NavLinks";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center  px-10  py-2 justify-center xl:text-2xl w-full">
      <nav className="text-white flex lg:flex-col sm:flex-row items-center  ">
        <div className="md:pb-10">
          <Image
            src={"/XANART_logo_letras.png"}
            width={200}
            height={100}
            alt="Logo"
            priority={true}
          />
        </div>

        <section className="MOBILE-MENU flex justify-end  lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-red-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-red-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-red-600"></span>
          </div>

          <div
            className={isNavOpen ? "showMenuNav" : "hideMenuNav"} //toggle class based on isNavOpen
          >
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8 bg-white  first:hover:bg-red-900"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <div className="hover:bg-white">
                <svg
                  className="h-8 w-8  "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <NavLinks links={navigation} />
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <NavLinks links={navigation} />
        </ul>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 50vh;
          top: 0;
          left: 0;
          background: rgb(13, 13, 0);
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
