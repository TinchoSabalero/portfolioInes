"use client";

import { useState } from "react";
import type { NavItem, Profile } from "@/content/site";
import styles from "./SiteHeader.module.css";

type Props = { profile: Profile; nav: NavItem[] };

export function SiteHeader({ profile, nav }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#inicio" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandName}>{profile.name}</span>
          <span className={styles.brandRole}>{profile.role}</span>
        </a>

        <button
          type="button"
          className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav
          id="menu-principal"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className={`btn btn-quiet ${styles.cta}`}
            onClick={() => setOpen(false)}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
