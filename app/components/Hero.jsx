

import {gsap} from "gsap"
import { useEffect } from "react";
import SplitType from "split-type"
import { useRef } from "react";



const HeroText=  () =>{
  const target = useRef(null);

  useEffect(()=>{
    if (target.current){
      gsap.set(target.current, {visibility: "visible"})
      const text = new SplitType(target.current)
      gsap.from(text.chars, {
        xPercent:-50,
        opacity: 0,
        stagger: {
          from:"left",
          each: 0.05
        },
        duration:2,
        scale:0.5,
        ease:"expo.out",
        color: "red",
        
      })
    }


  },[target])

  return(
    <div className="w-screen h-screen flex justify-center flex-col gap-12 items-center ">
    <h1 id="text" ref={target} className="lg:text-8xl md:text-6xl text-center mix-blend-normal font-bold">VOS PONES LA PIEL, NOSOTROS EL ARTE </h1>
    <div className=" w-full h-[40px] bg-red-950"><a href="/Gallery">Porftolio</a></div>
    </div>
)
}



export const Hero = () => {
  return (
    <>
    <div className="bg-xanart"><HeroText/></div>
    </>
  )
}
