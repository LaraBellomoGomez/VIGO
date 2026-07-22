import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Lleva el scroll al tope en cada cambio de ruta (comportamiento esperado de un sitio multi-página). */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
