// src/components/Footer.tsx
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <ul className="social-list">
          <li>
            <a href="https://www.youtube.com/@jhonbucks">
              <YouTubeIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/jhonbucksarte">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/jhonbucks">
              <InstagramIcon />
            </a>
          </li>
        </ul>
        <p className="rights">
          © 2025 Jhon Bucks. Todos os direitos reservados.
          <br />
          Design by ZiboO Studios
        </p>
      </div>
    </footer>
  );
}
