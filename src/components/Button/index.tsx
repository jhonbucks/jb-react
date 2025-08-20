import React from "react";

interface TransparentButtonProps {
  label: string;
  href: string;
  color?: string; // padrão: branco
}

export const TransparentButton: React.FC<TransparentButtonProps> = ({
  label,
  href,
  color = "#ffffff",
}) => {
  return (
    <a
      href={href}
      style={{
        display: "inline-block",
        padding: "10px 24px",
        color: color,
        border: `2px solid ${color}`,
        textDecoration: "none",
        textTransform: "uppercase",
        fontWeight: 500,
        letterSpacing: "1px",
        borderRadius: "6px", // mais quadrado
        backgroundColor: "transparent",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          color + "20"; // cor com transparência no hover
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          "transparent";
      }}
    >
      {label}
    </a>
  );
};
