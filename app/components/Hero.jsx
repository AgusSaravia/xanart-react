import { gsap } from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";
import { useRef } from "react";
import Header from "./Header";
import LogoSVG from "./LogoSVG";

export const HeroText = ({ children, textSize }) => {
  const target = useRef(null);

  useEffect(() => {
    if (target.current) {
      gsap.set(target.current, { visibility: "visible" });
      const text = new SplitType(target.current);
      gsap.from(text.chars, {
        xPercent: -50,
        opacity: 0,
        stagger: {
          from: "top",
          each: 0.04,
        },
        duration: 1,
        scale: 0.5,
        ease: "expo",
        color: "red",
      });
    }
  }, [target]);

  return (
    <h1 id="text" ref={target} className={textSize}>
      {children}
    </h1>
  );
};
const HeroGrid = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row justify-center mt-6 px-6 gap-6 max-w-3xl mx-auto pt-[7.8rem]">
      <div className="sm:self-start sm:basis-1/3 ">
        <HeroText textSize={"text-4xl text-center uppercase"}>
          Vos pones
          <br />
          la piel
        </HeroText>
      </div>
      <div className="sm:basis-1/3">
        <LogoSVG width="100%" height="auto" />
      </div>
      <div className="sm:self-end sm:basis-1/3">
        <HeroText textSize={"text-4xl text-center uppercase"}>
          Nosotros
          <br />
          el arte
        </HeroText>
      </div>
    </div>
  );
};

const Hero = () => {
  const isWindowDefined = typeof window !== "undefined";
  return (
    <>
      <section className="w-full   gap-32 py-4 bg-opacity-60   bg-black">
        <Header />

        <HeroGrid />
      </section>
    </>
  );
};
export default Hero;
