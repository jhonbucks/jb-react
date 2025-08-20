// src/components/FancyButton/index.tsx
import React from "react";
// use o import que você estiver usando no projeto:
// import "./FancyButton.css";
import styles from "./index.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "secondary" | "default"; // AGORA OPCIONAL
  block?: boolean;
  radius?: number;
};

export default function FancyButton({
  href,
  children,
  variant = "default",
  block = false,
  radius = 10,
}: Props) {
  // Se estiver usando CSS Module:
  const cls = [
    styles?.fbtn ?? "fbtn",
    variant === "secondary" ? styles?.secondary ?? "secondary" : "",
    block ? styles?.block ?? "block" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={cls} style={{ borderRadius: radius }}>
      {children}
    </a>
  );
}
