import React from "react";
import Hero from "../components/Hero";

import "./Index.css";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import BannerImageCTAFull from "../components/BannerImageCTAFull";
import CareerSection from "../components/CareerSection/CareerSection";
import BannerImageCTAFullAnimate from "../components/BannerImageCTAFullAnimate";

const HERO_BG = "/images/fundonoah.png";

export default function Index() {
  return (
    <>
      <Navbar />

      {/* <Hero /> */}
      <BannerImageCTAFullAnimate
        src="/images/imgfundo0.png"
        href="#"
        buttonText="Ver detalhes"
        alt="Banner Noah"
        animationDurationMs={12000} // opcional
        pauseOnHover={true} // opcional
      />

      <section className="about container" style={{ marginBottom: "0px" }}>
        <BannerImageCTAFull
          src="/images/artbook.png"
          href="/art"
          buttonText="Ver detalhes"
          alt="Banner Noah"
        />
      </section>
      <section style={{ marginTop: "0" }}>
        <CareerSection
          leftImages={["/images/logoconceito.png", "/images/logo25.png"]}
          rightImage="/images/img99.png"
          title="Sobre mim"
          description="Jhon Bucks, sempre foi apaixonado por arte, expressando sua criatividade desde cedo por meio de desenhos e histórias..."
          href="/sobre"
          buttonText="Saiba mais"
        />
      </section>

      <Footer />
    </>
  );
}
