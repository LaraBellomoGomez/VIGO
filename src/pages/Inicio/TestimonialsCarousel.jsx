import { useState } from 'react';
import { testimonials } from '../../data/content';
import { useIsMobile } from '../../hooks/useIsMobile';
import styles from './TestimonialsCarousel.module.css';

export default function TestimonialsCarousel() {
  const isMobile = useIsMobile();
  const visibleCount = isMobile ? 1 : 3;
  const [start, setStart] = useState(0);

  const prev = () => {
    setStart((s) => (s - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setStart((s) => (s + 1) % testimonials.length);
  };

  const visible = Array.from({ length: visibleCount }, (_, i) => testimonials[(start + i) % testimonials.length]);

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.arrow} onClick={prev} aria-label="Reseña anterior">
        ‹
      </button>

      <div className={styles.track}>
        {visible.map((t, i) => (
          <div key={`${t.name}-${start}-${i}`} className={styles.card}>
            <p className={styles.stars}>★★★★★</p>
            <p className={styles.text}>{t.text}</p>
            <p className={styles.name}>{t.name}</p>
          </div>
        ))}
      </div>

      <button type="button" className={styles.arrow} onClick={next} aria-label="Siguiente reseña">
        ›
      </button>
    </div>
  );
}
