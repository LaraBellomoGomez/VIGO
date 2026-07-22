import { services } from '../data/content';
import ServiceCard from './ServiceCard';
import styles from './ServicesGrid.module.css';

export default function ServicesGrid({ variant = 'compact' }) {
  return (
    <div className={styles.grid}>
      {services.map((service, index) => (
        <ServiceCard key={service.slug} service={service} highlight={index % 2 === 0} variant={variant} />
      ))}
    </div>
  );
}
