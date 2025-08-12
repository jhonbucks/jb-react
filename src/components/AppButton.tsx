// src/components/AppButton.tsx
import React from "react";
import Button, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export interface AppButtonProps extends Omit<MuiButtonProps, "href"> {
  text: string;
  href: string;
}

export default function AppButton({
  text,
  href,
  variant = "outlined", // 'text' | 'contained' | 'outlined'
  color = "primary", // 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  size = "medium", // 'small' | 'medium' | 'large'
  sx,
  ...rest
}: AppButtonProps) {
  return (
    <Button
      component="a"
      href={href}
      variant={variant}
      color={color}
      size={size}
      sx={sx}
      {...rest}
    >
      {text}
    </Button>
  );
}
