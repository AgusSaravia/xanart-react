import React from 'react'
import {HeroText} from '../components/Hero'
import Link from 'next/link'
import PaintingStainsSVG from '../components/PaintingStainsSVG'
const Cta = () => {
  return (
    <div className='bg-[#E0E0E0]'>
      <h1 className='text-6xl uppercase text-black'>
        Bienvenidos 
      </h1>
      <br/>
      <h2 className="text-orange-900 text-xl uppercase "> Donde la tinta corre todos los dias...</h2>

      <HeroText textSize={"text-2xl text-black"}>
        Si te gustaria concretar una cita con nosotros, ve 
        <br/>
        directamente a nuestro apartado de <Link className="text-red-700 underline" href="#"> contacto</Link> y dinos por 
        <br/>
        telefono, email o whatsapp que te gustaria hacerte
      </HeroText>
        <br/>
      <HeroText textSize={"text-2xl text-black" }>
        Si lo que buscas es inspiracionm, no dudes en visitar
        <br/>
        nuestra <Link className="text-red-700 underline" href="#"> galeria</Link>
      </HeroText>
      <br/>
      <HeroText textSize={"text-2xl text-black"}>
        No te olvides tampoco de ver nuestros consejos sobre
        <br/>
        Los <Link className="text-red-700 underline" href="#"> cuidados</Link> higienicos para tatuajes
      </HeroText>

      <div>
        <PaintingStainsSVG width={"100%"} height={"auto"}/>
      </div>
    </div>
    
  )
}

export default Cta