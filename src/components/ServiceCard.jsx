import { Link } from 'react-router-dom';
import { whatsappLinks } from '../data/content';
import styles from './ServiceCard.module.css';

/**
 * variant: 'compact' (solo ícono + título, usado en Inicio, lleva a su detalle en Servicios) |
 *          'full' (+ descripción y link, usado en la grilla de Servicios)
 * highlight: alterna fondo verde salvia / tan claro, nunca dos del mismo color seguidas
 */
export default function ServiceCard({ service, highlight, variant = 'compact' }) {
  const cardClass = `${styles.card} ${highlight ? styles.highlight : styles.tan} ${
    variant === 'full' ? styles.full : styles.compact
  }`;

  if (variant === 'compact') {
    return (
      <Link to={`/servicios#${service.slug}`} className={cardClass}>
        <img src={service.icon} alt="" aria-hidden="true" className={styles.icon} />
        <h3 className={styles.title}>{service.title}</h3>
      </Link>
    );
  }

  return (
    <div className={cardClass}>
      <img src={service.icon} alt="" aria-hidden="true" className={styles.icon} />
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.desc}>{service.desc}</p>
      <a href={whatsappLinks.general} target="_blank" rel="noopener noreferrer" className={styles.link}>
        Consultar →
      </a>
    </div>
  );
}
