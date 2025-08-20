// src/components/TransparentButton/index.tsx
import React from "react";
import styles from "./index.module.css"; // importa como módulo

type OwnProps = {
  href: string;
  children: React.ReactNode;
  color?: string; // padrão: branco
  radius?: number; // padrão: 8
};

type Props = OwnProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function TransparentButton({
  href,
  children,
  color = "#ffffff",
  radius = 8,
  className,
  style,
  ...rest
}: Props) {
  return (
    <a
      href={href}
      className={`${styles.btn} ${className ?? ""}`} // aplica a classe do module
      style={{ ...style, color, borderColor: color, borderRadius: radius }}
      {...rest}
    >
      {children}
    </a>
  );
}
