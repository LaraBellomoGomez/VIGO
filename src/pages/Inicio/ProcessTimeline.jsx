import proceso1 from '../../assets/images/proceso-1-reservar.jpg';
import proceso2 from '../../assets/images/proceso-2-consulta.jpg';
import proceso3 from '../../assets/images/proceso-3-tratamiento.jpg';
import proceso4 from '../../assets/images/proceso-4-seguimiento.jpg';
import { processSteps } from '../../data/content';
import styles from './ProcessTimeline.module.css';

const photosByKey = { proceso1, proceso2, proceso3, proceso4 };

export default function ProcessTimeline() {
  return (
    <ol className={styles.timeline}>
      {processSteps.map((step, index) => (
        <li key={step.title} className={styles.step}>
          <span className={styles.marker}>{index + 1}</span>
          <img src={photosByKey[step.photoKey]} alt="" aria-hidden="true" className={styles.photo} />
          <div className={styles.content}>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.desc}>{step.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
