

import {gsap} from "gsap"
import { useEffect } from "react";
import SplitType from "split-type"
import { useRef } from "react";
import Header from "./Header";
import Image from "next/image";



const HeroText=  ({text}) =>{
  const target = useRef(null);

  useEffect(()=>{
    if (target.current){
      gsap.set(target.current, {visibility: "visible"})
      const text = new SplitType(target.current)
      gsap.from(text.chars, {
        xPercent:-50,
        opacity: 0,
        stagger: {
          from:"top",
          each: 0.04
        },
        duration:1,
        scale:0.5,
        ease:"expo",
        color: "red",
        
      })
    }

  },[target])


  return(
    
    <h1 id="text" ref={target} className="   5xl:text-9xl sm:text-9xl md:text-6xl text-center">{text}</h1>
    
)
}
const HeroGrid = () =>{
  return(
    <div className="grid grid-cols-5 grid-rows-8 gap-7">
    <div className="row-span-2 col-start-2 row-start-2">
    <HeroText text={"Vos pones la piel"}/>
    </div>
    <div className="row-span-4 col-start-3 row-start-3"> 
      <Image
      src={'/LOGO(1).png'}
      width={1000}
      height={500}
      alt="LOGO"
      />
        </div>
   <div className="row-span-5 col-start-4 row-start-6"><HeroText text={"Nosotros el arte"}/></div>
</div>
  )
}

const Hero = () => {

  const isWindowDefined = typeof window !== 'undefined';
  return (

    <>
    <section className="w-full   gap-32 py-4 bg-opacity-60   bg-black">
    <Header/>

    
    <HeroGrid/>
    </section>
    </>
  )
}
export default Hero 