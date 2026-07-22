import { whatsappLinks } from '../../data/content';
import WhatsappButton from '../../components/WhatsappButton';
import styles from './SimpleCta.module.css';

export default function SimpleCta() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Esperamos verte <span className="accent">pronto</span>
      </h2>
      <p className={styles.paragraph}>
        ¿Tenés dudas sobre qué tratamiento es el más adecuado para vos? Escribinos y te asesoramos
        sin compromiso.
      </p>
      <WhatsappButton href={whatsappLinks.general}>Reservar turno preferido</WhatsappButton>
    </div>
  );
}
