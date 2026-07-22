import styles from './WhatsappButton.module.css';

/**
 * variant: 'solid' (fondo verde CTA) | 'outline' (borde, para header)
 */
export default function WhatsappButton({ href, children, variant = 'solid', className = '' }) {
  const variantClass = variant === 'outline' ? styles.outline : styles.solid;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${variantClass} ${className}`}
    >
      {children}
    </a>
  );
}
