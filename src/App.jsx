import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './pages/Inicio/Inicio';
import Servicios from './pages/Servicios/Servicios';
import Nosotros from './pages/Nosotros/Nosotros';
import Contacto from './pages/Contacto/Contacto';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Inicio />} />
      </Route>
    </Routes>
  );
}
