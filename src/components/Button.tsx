import React, { ReactNode } from "react";
import "./Button.css";

export interface ButtonProps {
  href?: string;
  size?: "small" | "medium" | "large";
  children: ReactNode;
}

export default function Button({
  href = "#",
  size = "medium",
  children,
}: ButtonProps) {
  return (
    <a href={href} className={`btn btn-${size}`}>
      {children}
    </a>
  );
}
