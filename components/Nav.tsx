"use client";

import { useId, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
import { INSTAGRAM_URL, THREADS_URL, FACEBOOK_URL } from "@/lib/constants";
import InstagramIcon from "@/components/icons/InstagramIcon";
import ThreadsIcon from "@/components/icons/ThreadsIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuId = useId();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const onNavClick = (id: string) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>✦ Alex Đọc Tarot</span>
      <button
        type="button"
        className={styles.menuButton}
        aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
        aria-expanded={mobileOpen}
        aria-controls={mobileMenuId}
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span className={styles.menuIcon} aria-hidden="true" />
      </button>

      <div className={styles.navLinksDesktop}>
        <button onClick={() => onNavClick("about")} className={styles.navLink}>
          Về tôi
        </button>
        <button onClick={() => onNavClick("services")} className={styles.navLink}>
          Dịch vụ
        </button>
        <button onClick={() => onNavClick("cta")} className={styles.navLink}>
          Đặt lịch
        </button>
        <div className={styles.navSocial}>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            title="Instagram"
          >
            <InstagramIcon />
          </Link>
          <Link
            href={THREADS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            title="Threads"
          >
            <ThreadsIcon />
          </Link>
          <Link
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            title="Facebook"
          >
            <FacebookIcon />
          </Link>
        </div>
      </div>

      <div
        id={mobileMenuId}
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileMenuInner}>
          <button onClick={() => onNavClick("about")} className={styles.mobileNavLink}>
            Về tôi
          </button>
          <button onClick={() => onNavClick("services")} className={styles.mobileNavLink}>
            Dịch vụ
          </button>
          <button onClick={() => onNavClick("cta")} className={styles.mobileNavLink}>
            Đặt lịch
          </button>

          <div className={styles.mobileSocialRow}>
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              title="Instagram"
              onClick={() => setMobileOpen(false)}
            >
              <InstagramIcon />
            </Link>
            <Link
              href={THREADS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              title="Threads"
              onClick={() => setMobileOpen(false)}
            >
              <ThreadsIcon />
            </Link>
            <Link
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              title="Facebook"
              onClick={() => setMobileOpen(false)}
            >
              <FacebookIcon />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
