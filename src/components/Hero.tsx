// src/components/Hero.tsx
import React, { CSSProperties, ReactNode } from "react";
import "./Hero.css";

export interface HeroProps {
  bgImage: string;
  height?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export default function Hero({
  bgImage,
  height = "100vh",
  children,
  style,
}: HeroProps) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bgImage})`,
        height,
        ...style,
      }}
    >
      <div className="hero-inner">{children}</div>
    </section>
  );
}
