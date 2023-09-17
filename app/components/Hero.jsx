import Image from "next/image"
import { firstN, surname, hero_text } from "../data"
import ScrollingDiv from "./Scroll"

const HeroText=  ({paragraph, firstN, anchor_text, surname}) =>{
return(
    <>
    <h1 className="heroTitle">{firstN}<span className="surname">{surname}</span></h1>
    <p className="heroParagraph w-[40svw]">{paragraph}</p>
    <div className="heroAnchorContainer">
    <a href="#" className="heroAnchor">{anchor_text}</a>
    </div>
    </>
)
}





const Hero = () => {

  

  return (
        <section className="bg-[url('/aletatuando.png')] bg-no-repeat bg-cover w-[100svw] min-h-full items-start px-5 bg-center">
            <div   className=" flex-col flex px-[1.5rem] lg:px-[10rem] py-[10rem] font-eczar sm:relative sm:bottom-[10rem] ">
              <HeroText paragraph={hero_text} firstN={firstN} surname={surname} anchor_text={"Mis trabajos"}/>
        
            
              <div  className="self-center mt-[10rem] animate-bounce "><ScrollingDiv text={'scroll'}/></div>
          
            </div>

        </section>    








  )
}

export default Hero