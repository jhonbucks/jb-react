import { useState, useEffect, useCallback } from 'react';
import styles from './imageGridLightbox.module.css';

type Thumb = { src: string; alt?: string };

type Props = {
  images: Thumb[];
};

export default function ImageGridLightbox({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i: number) => {
    if (i < 0 || i >= images.length) return;
    setIdx(i);
    setOpen(true);
  };

  const prev = useCallback(() => {
    if (images.length === 0) return;
    setIdx((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    if (images.length === 0) return;
    setIdx((i) => (i + 1) % images.length);
  }, [images.length]);

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

  const current = images[idx];

  return (
    <section className={styles.wrap}>
      <div className={styles.grid}>
        {images.map((t, i) => (
          <button
            key={i}
            className={styles.cell}
            onClick={() => openAt(i)}
            aria-label={`Abrir imagem ${i + 1}`}
          >
            <img className={styles.img} src={t.src} alt={t.alt ?? ''} />
          </button>
        ))}
      </div>

      {open && (
        <div className={styles.modal} role="dialog" aria-modal="true">
          <button
            className={`${styles.nav} ${styles.prev}`}
            onClick={prev}
            aria-label="Anterior"
            disabled={images.length <= 1}
          >
            ‹
          </button>

          {current && <img className={styles.full} src={current.src} alt={current.alt ?? ''} />}

          <button
            className={`${styles.nav} ${styles.next}`}
            onClick={next}
            aria-label="Próxima"
            disabled={images.length <= 1}
          >
            ›
          </button>

          <button className={styles.close} onClick={() => setOpen(false)} aria-label="Fechar">
            ×
          </button>
        </div>
      )}
    </section>
  );
}
