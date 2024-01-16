import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import { artists, navigation } from "../data";
import NavLinks from "./NavLinks.jsx";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full max-h-[20svh] ">
      <div className="">
        <a href="/">
          {" "}
          <Image
            className=" "
            src={"/xanart.png"}
            width={90}
            height={100}
            alt="Xanart logo "
          />
        </a>
      </div>
      <nav className="">
        <div className="">
          <NavLinks links={navigation} />
        </div>
        <div className="">
          {artists.map((artist, index) => (
            <SocialMediaLinks key={index} artist={artist} />
          ))}
        </div>
      </nav>
      <span className="text-xs">
        Developed by{" "}
        <a href="https://www.github.com/AgusSaravia" target="_blank">
          Agustin Saravia
        </a>
      </span>
    </footer>
  );
};
