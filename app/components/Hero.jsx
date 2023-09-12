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
        <section className="bg-white min-w-full items-center justify-evenly flex flex-auto">
            <div className="flex ">
            <Image
             className="self-center "
                src={"/tatuando(1).png"}
                width={900}
                height={400}
                alt="Ale tatuando"        
            />
            </div>
            <div className="text-center  ">
              <HeroText paragraph={hero_text} title={hero_title} anchor_text={"GaLEriA"}/>
        
            </div>


        </section>    








  )
}

export default Hero