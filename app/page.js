'use client'
import Hero from "./components/Hero"
import Header from "./components/Header"
import Form from "./components/ContacForm"
import CallToAction from "./components/Cta.js"
import { Gallery } from "./components/Gallery"
import Footer from "./components/Footer"



export default function Home() {
  return (
  <>
    <main className="flex min-h-screen  flex-col items-center justify-between bg-zinc-900 ">
      <Header/>
      <Hero/>
      <div className="opacity-5 ">
      <CallToAction/>
      </div>
      <div className=' bg-black'>
      <Gallery/>
      </div>
      <section  className="bg-zinc-900 w-[100%]"> 
      <Form />
      </section>
      <Footer/>
    </main>
  </> 
  )
}
