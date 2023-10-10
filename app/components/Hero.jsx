
import { firstN, surname, hero_text } from "../data"



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
          <div  id="scrollContainer" className=" flex-col flex px-[1.5rem] lg:px-[10rem] rem] font-eczar  ">
            <HeroText  paragraph={hero_text} firstN={firstN} surname={surname} anchor_text={"Mis trabajos"}/>            
            <div  className="self-center mt-[10rem] animate-bounce ">      
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          
          </div>
        </section>    








  )
}

export default Hero