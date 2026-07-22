import { clinic, whatsappLinks } from '../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {year} {clinic.name} · {clinic.address}
      </p>
      <div className={styles.social}>
        <a
          href={whatsappLinks.general}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
          aria-label="Escribir por WhatsApp"
        >
          WA
        </a>
        <a
          href={clinic.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
          aria-label="Ver Instagram"
        >
          IG
        </a>
      </div>
    </footer>
  );
}
