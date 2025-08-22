import React from 'react';
import Hero from '../components/Hero';

import './Index.css';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import BannerImageCTAFull from '../components/BannerImageCTAFull';
import CareerSection from '../components/CareerSection/CareerSection';
import BannerImageCTAFullAnimate from '../components/BannerImageCTAFullAnimate';

const HERO_BG = '/images/fundonoah.png';

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
        animationDurationMs={12000}
        pauseOnHover={true}
      />

      <section style={{ margin: 0, padding: 0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              margin: '0 auto',
              width: '100%',
              maxWidth: 1920,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <BannerImageCTAFull
              src="/images/artbook.png"
              href="/art"
              buttonText="Ver detalhes"
              alt="Banner Noah"
            />
          </div>
        </div>
      </section>

      <section style={{ margin: 0, padding: 0 }}>
        <CareerSection
          leftImages={['/images/meu20.jpg', '/images/meu10.jpg']}
          rightImage="/images/menina.png"
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
