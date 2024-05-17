"use client";
import Hero from "./components/Hero";
import Form from "./components/ContacForm";
import Cta from "./components/Cta";
import { GallerySection } from "./components/Gallery";
import { Footer } from "./components/Footer";

function Home() {
  return (
    <>
      <div className="bg-[url('/aletatuando.webp')]   w-[100svw]  min-h-screen bg-no-repeat bg-cover bg-center flex justify-center ">
        <Hero />
      </div>
      <Cta />
      <Form />
      <Footer />
    </>
  );
}

export default Home;
