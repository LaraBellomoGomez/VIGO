import { highlights } from '../../data/content';
import styles from './Highlights.module.css';

export default function Highlights() {
  return (
    <div className={styles.grid}>
      {highlights.map((item) => (
        <div key={item.title} className={styles.item}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.desc}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
