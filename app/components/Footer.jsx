import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import { artists, navigation } from "../data";
import NavLinks from "./NavLinks.jsx";
import Image from "next/image";

export const Footer = () => {
  return (
    <span className="text-xs">
      Developed by{" "}
      <a href="https://www.github.com/AgusSaravia" target="_blank">
        Agustin Saravia
      </a>
    </span>
  );
};
