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

      <section className="about container">
        <div id="sobre1">
          <ImageGridLightbox images={conceptImages} />

          <div
            className="btns-small"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginTop: '10px',
            }}
          >
            <style>{`
                /* cSpell:words fbtn btns */
                .btns-small .fbtn {
                  padding: 8px 16px !important;
                  font-size: 0.9rem !important;
                  line-height: 1 !important;
                }
                @media (max-width: 640px) {
                  .btns-small { justify-content: center; }
                  .btns-small .fbtn { padding: 8px 14px !important; }
                }
                @media (max-width: 480px) {
                  .btns-small { flex-direction: column; align-items: center; gap: 10px !important; }
                  .btns-small .fbtn { width: 100%; max-width: 260px; }
                }
              `}</style>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
