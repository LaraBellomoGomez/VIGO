import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import bannerImg from '../../assets/images/consultorio-contacto.jpg';
import { services } from '../../data/content';
import ServicesGrid from '../../components/ServicesGrid';
import SectionHeading from '../../components/SectionHeading';
import ServiceDetailRow from './ServiceDetailRow';
import styles from './Servicios.module.css';

export default function Servicios() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <div>
      <img src={bannerImg} alt="Consultorio de VIGO Odontología Integral" className={styles.banner} />

      <div className={`${styles.page} container`}>
        <SectionHeading
          level="h1"
          title="Nuestros"
          accent="tratamientos"
          subtitle="Odontología integral, estética y rehabilitación en un mismo lugar."
        />
        <ServicesGrid variant="full" />

        <div className={styles.detailList}>
          {services.map((service, index) => (
            <ServiceDetailRow key={service.slug} service={service} highlight={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}
