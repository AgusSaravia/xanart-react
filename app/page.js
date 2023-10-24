'use client'

import Hero from "./components/Hero"
import Header from "./components/Header"
import Form from "./components/ContacForm"
import CallToAction from "./components/Cta.js"
import { Gallery } from "./components/Gallery"



export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between ">
      <Header/>
      <Hero/>
      <CallToAction/>
      <Gallery/>
      <Form />
      
    </main>
  )
}
