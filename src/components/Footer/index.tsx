// src/components/Footer/index.tsx
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerInner} container`}>
        <ul className={styles.socialList}>
          <li>
            <a href="https://www.youtube.com/@jhonbucks" aria-label="YouTube">
              <YouTubeIcon fontSize="inherit" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/jhonbucksarte"
              aria-label="Facebook"
            >
              <FacebookIcon fontSize="inherit" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jhonbucks"
              aria-label="Instagram"
            >
              <InstagramIcon fontSize="inherit" />
            </a>
          </li>
        </ul>

        <p className={styles.rights}>
          © 2025 Jhon Bucks. Todos os direitos reservados.
          <br />
          Design by ZiboO Studios
        </p>
      </div>
    </footer>
  );
}
