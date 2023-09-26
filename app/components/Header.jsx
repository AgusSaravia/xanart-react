import { useState } from "react";
import Image from "next/image";
import { navigation } from "../data";



const NavLinks = ({links}) => {
  return (links.map((e, i)=>{
     return <li className="custom" key={i}><a href={e.link}>{e.name}</a></li>

  }))
}

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  
    return (
      <div className="bg-gradient-to-b from-black via-[#212121] to-black flex items-center min-w-full px-9 lg:px-[11rem] justify-between border-b border-gray-400 ">
        <a href="/">
        <Image 
          className="max-w-full  h-auto object-contain"
          src= {"/xanart.png"}
          width={160}
          height={160}
          alt='Logo'
        />
        </a>
        <nav>
          <section className="MOBILE-MENU flex  lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-slate-400"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-slate-400"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-slate-400"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"} //toggle class based on isNavOpen 
            >       
              <div  
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-slate-100"
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
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                 <NavLinks links={navigation}/>
              </ul>
            </div>
          </section>
  
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
           <NavLinks links={navigation}/>
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