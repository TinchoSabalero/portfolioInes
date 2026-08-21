"use client";

import { useState } from "react";
import type { SiteContent } from "@/content/site";
import styles from "./Sections.module.css";

/**
 * Acordeón: una sola respuesta abierta por vez. Arranca con la primera abierta
 * para que la sección no se lea como una lista de títulos mudos.
 *
 * Se usa <button> real para que funcione con teclado y lectores de pantalla.
 */
export function Faq({ faq }: { faq: SiteContent["faq"] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="band">
      <div className="wrap wrap-narrow section">
        <div className={`${styles.head} ${styles.headTight}`}>
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className="title">{faq.title}</h2>
        </div>

        <div className={styles.faqList}>
          {faq.items.map((item, index) => {
            const open = index === openIndex;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={item.q} className={styles.faqItem}>
                <button
                  type="button"
                  id={buttonId}
                  className={styles.faqButton}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className={styles.faqQuestion}>{item.q}</span>
                  <span className={styles.faqSign} aria-hidden="true">
                    {open ? "–" : "+"}
                  </span>
                </button>

                {open && (
                  <p
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={styles.faqAnswer}
                  >
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
