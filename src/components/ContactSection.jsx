import contactImg from '../assets/images/consultorio-contacto.jpg';
import { clinic, mapsEmbedUrl, whatsappLinks } from '../data/content';
import WhatsappButton from './WhatsappButton';
import styles from './ContactSection.module.css';

export default function ContactSection({ headingLevel = 'h2' }) {
  const Heading = headingLevel;

  return (
    <div>
      <div className={`${styles.hero} container`}>
        <div className={styles.heroText}>
          <Heading className={styles.title}>
            Esperamos tener <span className="accent">noticias tuyas</span>
          </Heading>
          <p className={styles.paragraph}>
            ¿Querés coordinar tu turno? Escribinos por WhatsApp y te respondemos a la brevedad.
          </p>
          <WhatsappButton href={whatsappLinks.contacto}>Escribir por WhatsApp</WhatsappButton>
        </div>
        <img src={contactImg} alt="Consultorio de VIGO Odontología Integral" className={styles.heroImage} />
      </div>

      <div className={styles.infoBand}>
        <div className={styles.infoGrid}>
          <div className={styles.infoCol}>
            <p className={styles.infoLabel}>DIRECCIÓN</p>
            <p className={styles.infoValue}>{clinic.address}</p>
          </div>
          <div className={styles.infoCol}>
            <p className={styles.infoLabel}>CONTACTO</p>
            <p className={styles.infoValue}>WhatsApp: {clinic.phoneDisplay}</p>
            <p className={styles.infoValue}>{clinic.email}</p>
            <a
              href={clinic.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLink}
            >
              {clinic.instagramHandle}
            </a>
          </div>
          <div className={styles.infoCol}>
            <p className={styles.infoLabel}>HORARIO DE ATENCIÓN</p>
            <p className={styles.infoValue}>{clinic.hours}</p>
          </div>
        </div>
      </div>

      <div className={styles.mapWrap}>
        <iframe
          src={mapsEmbedUrl}
          className={styles.map}
          loading="lazy"
          title="Ubicación de VIGO Odontología Integral en el mapa"
        />
        <a href={clinic.mapsLinkUrl} target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
          Ver en Google Maps →
        </a>
      </div>
    </div>
  );
}
