'use client'

import Hero from "./components/Hero"
import Header from "./components/Header"
import Form from "./Contact-Us/page"
import CallToAction from "./components/Cta.js"



export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between ">
      <Header/>
      <Hero/>
      <CallToAction/>
      <Form />
    </main>
  )
}
