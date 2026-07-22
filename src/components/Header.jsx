import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoVigo from '../assets/images/logo-vigo.png';
import { clinic, navLinks, whatsappLinks } from '../data/content';
import { useIsMobile } from '../hooks/useIsMobile';
import styles from './Header.module.css';

export default function Header() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const goHome = () => {
    closeMenu();
    navigate('/');
  };

  return (
    <header className={styles.wrapper}>
      {!isMobile && (
        <div className={styles.topBar}>
          <span>📍 {clinic.address}</span>
          <span>WhatsApp: {clinic.phoneDisplay}</span>
        </div>
      )}

      <div className={styles.header}>
        <button type="button" className={styles.logoButton} onClick={goHome} aria-label="Ir a Inicio">
          <img src={logoVigo} alt="VIGO Odontología Integral" className={styles.logo} />
        </button>

        <nav className={`${styles.nav} ${isMobile ? styles.navMobile : ''} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((item) => (
            <NavLink
              key={item.key}
              to={item.to}
              end={item.to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `${styles.navLink} ${isMobile ? styles.navLinkMobile : ''} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={whatsappLinks.general} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            Reservar turno
          </a>
          {isMobile && (
            <button
              type="button"
              className={styles.menuToggle}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              ☰
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
