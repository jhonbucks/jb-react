// pages/Index.tsx
import React from 'react';

import './Index.css';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import ImageGridLightbox from '../components/ImageGridLightbox';
import HeroBanner from '../components/HeroBanner';

export default function Index() {
  const conceptImages = [
    { src: '/images/meu12.jpg', alt: 'Arte 1' },
    { src: '/images/meu13.jpg', alt: 'Arte 2' },
    { src: '/images/meu7.png', alt: 'Arte 3' },
    { src: '/images/meu19.jpg', alt: 'Arte 4' },
    { src: '/images/meu3.png', alt: 'Arte 1' },
    { src: '/images/meu20.jpg', alt: 'Arte 2' },
    { src: '/images/meu21.jpg', alt: 'Arte 3' },
    { src: '/images/meu10.jpg', alt: 'Arte 4' },
  ];

  return (
    <>
      <Navbar />

      <HeroBanner
        src="/images/meu24.png"
        title="meus desenhos"
        heightVh={60} // pode trocar para 100 se quiser ocupar a tela inteira
      />

      <section
        style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}
      >
        <ImageGridLightbox images={conceptImages} />
      </section>

      <Footer />
    </>
  );
}
