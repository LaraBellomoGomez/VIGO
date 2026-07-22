import heroImg from '../../assets/images/hero-portada.jpg';
import { checklist, whatsappLinks } from '../../data/content';
import ServicesGrid from '../../components/ServicesGrid';
import SectionHeading from '../../components/SectionHeading';
import WhatsappButton from '../../components/WhatsappButton';
import ContactSection from '../../components/ContactSection';
import TeamPreview from './TeamPreview';
import TestimonialsCarousel from './TestimonialsCarousel';
import ProcessTimeline from './ProcessTimeline';
import styles from './Inicio.module.css';

export default function Inicio() {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Tu sonrisa en manos <span className="accent">expertas</span>
          </h1>
          <p className={styles.heroParagraph}>
            Bienvenido a VIGO. Atendemos con dedicación y calidez en Villa Devoto, con un enfoque
            integral para el cuidado de tu boca.
          </p>
          <ul className={styles.checklist}>
            {checklist.map((item) => (
              <li key={item} className={styles.checklistItem}>
                <span className={styles.check}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <WhatsappButton href={whatsappLinks.general}>Reservar turno preferido</WhatsappButton>
          <p className={styles.reviews}>
            ★★★★★ <span className={styles.reviewsStrong}>Reseñas de pacientes</span> · basado en
            atención real
          </p>
        </div>
        <div className={styles.heroImageWrap}>
          <img
            src={heroImg}
            alt="Equipo odontológico de VIGO atendiendo a un paciente"
            className={styles.heroImage}
          />
        </div>
      </div>

      <div className={`${styles.specialties} container`}>
        <SectionHeading
          title="Áreas de"
          accent="especialización"
          subtitle="Un equipo formado en la UBA, listo para acompañarte en cada etapa del cuidado de tu sonrisa."
        />
        <ServicesGrid variant="compact" />
      </div>

      <div className="container">
        <SectionHeading
          title="Dentistas de primer nivel"
          accent="cuidarán de tus dientes"
          subtitle="Od. Yesica González y Od. Verena Villafañe, ambas formadas en la UBA, comparten un mismo criterio: atención cercana y tratamientos bien explicados."
        />
        <TeamPreview />
      </div>

      <div className={`${styles.specialties} container`}>
        <SectionHeading title="Testimonios de" accent="nuestros pacientes" />
        <TestimonialsCarousel />
      </div>

      <div className={`${styles.processSection} container`}>
        <SectionHeading title="Así es" accent="como funciona" />
        <ProcessTimeline />
      </div>

      <ContactSection headingLevel="h2" />
    </div>
  );
}
