import Image from "next/image"
import { hero_text, hero_title } from "../data"

const HeroText=  ({paragraph, title, anchor_text}) =>{
return(
    <>
    <h1 className="heroTitle">{title}</h1>
    <p className="heroParagraph">{paragraph}</p>
    <div className="heroAnchorContainer">
    <a href="#" className="heroAnchor">{anchor_text}</a>
    </div>
    </>
)
}



const Hero = () => {
  return (
        <section className="bg-[url('/aletatuando.png')] bg-no-repeat bg-cover w-[100svw] min-h-screen items-start px-5 bg-center  ">

            <div className=" px-[10rem] py-[10rem] ">
              <HeroText paragraph={hero_text} title={hero_title} anchor_text={"GaLEriA"}/>
        
            </div>


        </section>    








  )
}

export default Hero