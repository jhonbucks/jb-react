// src/components/GallerySection.tsx
import React, { useEffect, useState } from "react";

type Props = {
  heroSrc: string;
  heroAlt?: string;
  title: string;
  description: string;
  thumbs: { src: string; alt?: string }[];
  textColor?: string; // <- nova prop
};

export default function GallerySection({
  heroSrc,
  heroAlt = "",
  title,
  description,
  thumbs,
  textColor = "inherit",
}: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i: number) => {
    setIdx(i);
    setOpen(true);
  };
  const prev = () => setIdx((i) => (i - 1 + thumbs.length) % thumbs.length);
  const next = () => setIdx((i) => (i + 1) % thumbs.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, thumbs.length]);

  return (
    <section className="sc-wrap" style={{ color: textColor }}>
      <div className="sc-grid">
        <div className="sc-hero">
          <img src={heroSrc} alt={heroAlt} />
        </div>

        <div className="sc-content">
          <h2 className="sc-title">{title}</h2>
          <p className="sc-desc">{description}</p>

          <div className="sc-thumbs">
            {thumbs.map((t, i) => (
              <button
                key={i}
                className="sc-thumb"
                onClick={() => openAt(i)}
                aria-label={`Abrir imagem ${i + 1}`}
              >
                <img src={t.src} alt={t.alt ?? ""} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {open && (
        <div className="sc-modal" role="dialog" aria-modal="true">
          <button
            className="sc-close"
            onClick={() => setOpen(false)}
            aria-label="Fechar"
          >
            ×
          </button>
          <button
            className="sc-nav sc-prev"
            onClick={prev}
            aria-label="Anterior"
          >
            ‹
          </button>
          <img
            className="sc-full"
            src={thumbs[idx].src}
            alt={thumbs[idx].alt ?? ""}
          />
          <button
            className="sc-nav sc-next"
            onClick={next}
            aria-label="Próxima"
          >
            ›
          </button>
        </div>
      )}

      <style>{`
        .sc-wrap { padding: clamp(16px, 4vw, 40px) 0; }
        .sc-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: clamp(20px, 4vw, 48px);
          align-items: center;
        }

        .sc-hero { display: grid; place-items: center; }
        .sc-hero img {
          width: clamp(240px, 45vw, 520px);
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 50%;
        }

        .sc-title {
          font-size: clamp(28px, 4vw, 48px);
          line-height: 1.15;
          margin: 0 0 12px;
          font-weight: 600;
          color: inherit;        /* <- herda */
        }
        .sc-desc {
          font-size: clamp(14px, 1.6vw, 18px);
          line-height: 1.7;
          margin: 0 0 20px;
          max-width: 58ch;
          color: inherit;        /* <- herda (antes era #222) */
        }

        .sc-thumbs {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(120px, 1fr);
          gap: clamp(10px, 2vw, 20px);
          overflow-x: auto;
          padding-bottom: 6px;
        }
        .sc-thumb { border: 0; background: transparent; padding: 0; cursor: pointer; border-radius: 8px; overflow: hidden; }
        .sc-thumb img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; }
        .sc-thumb:hover img { filter: brightness(0.95); transform: translateY(-1px); transition: 160ms ease; }

        .sc-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.88); display: grid; grid-template-columns: 56px 1fr 56px; place-items: center; z-index: 60; }
        .sc-full { max-width: min(1200px, 92vw); max-height: min(86vh, 900px); object-fit: contain; }
        .sc-close { position: fixed; top: 14px; right: 18px; width: 36px; height: 36px; border-radius: 50%; border: 0; background: rgba(255,255,255,0.12); color: #fff; font-size: 22px; cursor: pointer; }
        .sc-nav { width: 48px; height: 48px; border-radius: 50%; border: 0; background: rgba(255,255,255,0.12); color: #fff; font-size: 30px; cursor: pointer; display: grid; place-items: center; }
        .sc-prev { justify-self: end; } .sc-next { justify-self: start; }

        @media (max-width: 1024px) {
          .sc-grid { grid-template-columns: 1fr; }
          .sc-hero img { width: clamp(220px, 70vw, 420px); }
          .sc-thumbs { grid-auto-columns: minmax(100px, 1fr); }
          .sc-modal { grid-template-columns: 44px 1fr 44px; }
          .sc-nav { width: 40px; height: 40px; font-size: 26px; }
        }
      `}</style>
    </section>
  );
}
