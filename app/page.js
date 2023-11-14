'use client'
import Hero from "./components/Hero"
import Header from "./components/Header"
import Form from "./components/ContacForm"
import CallToAction from "./components/Cta.js"
import {  GallerySection } from "./components/Gallery"
import {Footer} from "./components/Footer"



export default function Home() {
  return (
  <>
    <main className=" bg-zinc-950 ">
      <Header/>
      <Hero/>
      <CallToAction/>
      
      <GallerySection/>

      <Form />
      <Footer/>
    </main>
  </> 
  )
}
