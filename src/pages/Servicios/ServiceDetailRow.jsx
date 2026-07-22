import { whatsappLinks } from '../../data/content';
import styles from './ServiceDetailRow.module.css';

export default function ServiceDetailRow({ service, highlight }) {
  return (
    <div id={service.slug} className={styles.row}>
      <div className={`${styles.iconWrap} ${highlight ? styles.highlight : styles.tan}`}>
        <img src={service.icon} alt="" aria-hidden="true" className={styles.icon} />
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{service.title}</h3>
        {service.longDesc.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
        <a
          href={whatsappLinks.general}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Consultar →
        </a>
      </div>
    </div>
  );
}
