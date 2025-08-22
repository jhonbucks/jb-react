// components/HeroBanner/index.tsx
import React from 'react';
import styles from './heroBanner.module.css';

type Props = {
  src: string;
  title: string;
  heightVh?: number; // altura em vh (default 70)
};

export default function HeroBanner({ src, title, heightVh = 70 }: Props) {
  return (
    <section
      className={styles.wrap}
      style={
        {
          '--h': `${heightVh}vh`,
          '--img': `url('${src}')`,
        } as React.CSSProperties
      }
    >
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
}
