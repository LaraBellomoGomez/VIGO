import styles from './SectionHeading.module.css';

export default function SectionHeading({ title, accent, subtitle, level = 'h2' }) {
  const Heading = level;
  const sizeClass = level === 'h1' ? styles.titleLarge : styles.title;
  return (
    <div className={styles.wrapper}>
      <Heading className={sizeClass}>
        {title} {accent && <span className="accent">{accent}</span>}
      </Heading>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
