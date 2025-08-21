import { useEffect, useState, useCallback, type CSSProperties } from 'react';
import styles from './gallerySection.module.css';

type Thumb = { src: string; alt?: string };

type Props = {
  heroSrc: string;
  heroAlt?: string;
  title: string;
  description: string;
  thumbs: Thumb[];
  textColor?: string; // controla a cor via CSS var
};

export default function GallerySection({
  heroSrc,
  heroAlt = '',
  title,
  description,
  thumbs,
  textColor = 'inherit',
}: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i: number) => {
    if (i < 0 || i >= thumbs.length) return;
    setIdx(i);
    setOpen(true);
  };

  const prev = useCallback(() => {
    if (thumbs.length === 0) return;
    setIdx((i) => (i - 1 + thumbs.length) % thumbs.length);
  }, [thumbs.length]);

  const next = useCallback(() => {
    if (thumbs.length === 0) return;
    setIdx((i) => (i + 1) % thumbs.length);
  }, [thumbs.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, prev, next]);

  const current = thumbs.at(idx);
  const cssVars: CSSProperties = { ['--sc-text' as any]: textColor };

  return (
    <section className={styles.wrap}>
      <div className={styles.grid} style={cssVars}>
        <div className={styles.hero}>
          <img className={styles.heroImg} src={heroSrc} alt={heroAlt} />
        </div>

        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{description}</p>

          <div className={styles.thumbs}>
            {thumbs.map((t, i) => (
              <button
                key={i}
                className={styles.thumb}
                onClick={() => openAt(i)}
                aria-label={`Abrir imagem ${i + 1}`}
              >
                <img className={styles.thumbImg} src={t.src} alt={t.alt ?? ''} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {open && (
        <div className={styles.modal} role="dialog" aria-modal="true">
          <button className={styles.close} onClick={() => setOpen(false)} aria-label="Fechar">
            ×
          </button>
          <button
            className={`${styles.nav} ${styles.prev}`}
            onClick={prev}
            aria-label="Anterior"
            disabled={thumbs.length <= 1}
          >
            ‹
          </button>

          {current && <img className={styles.full} src={current.src} alt={current.alt ?? ''} />}

          <button
            className={`${styles.nav} ${styles.next}`}
            onClick={next}
            aria-label="Próxima"
            disabled={thumbs.length <= 1}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
