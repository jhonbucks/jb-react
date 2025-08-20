import React from "react";
import "./index.module.css";
import TransparentButton from "../TransparentButton";

const heroStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
  backgroundRepeat: "no-repeat",
  animation: "panBg 20s ease-in-out infinite alternate",
} as const;

const innerStyle: React.CSSProperties = {
  position: "absolute",
  right: "2rem",
  bottom: "2rem",
  zIndex: 2,
  display: "flex",
  gap: "1rem",
  whiteSpace: "nowrap",
} as const;

const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        ...heroStyle,
        backgroundImage: "url('/images/imgfundo0.png')",
      }}
    >
      <style>
        {`
          @keyframes panBg {
            0%   { background-position: 50% 50%; }
            50%  { background-position: 60% 40%; }
            100% { background-position: 50% 50%; }
          }
        `}
      </style>

      <div style={innerStyle}>
        <TransparentButton href="/noah">SAIBA MAIS</TransparentButton>
      </div>
    </section>
  );
};

export default HeroSection;
