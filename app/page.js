"use client";
import Hero from "./components/Hero";
import Form from "./components/ContacForm";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/Gallery.jsx"


function Home() {
  return (
    <div className="snap-y h-[100svh] overflow-y-scroll snap-mandatory">
      <div className="snap-start bg-[url('/aletatuando.webp')]   w-[100svw]  h-[100svh] bg-no-repeat bg-cover bg-center flex justify-center ">
        <Hero />
      </div>
      <div className="snap-start">
        <div className="w-full h-full bg-black">
          <GallerySection />
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
