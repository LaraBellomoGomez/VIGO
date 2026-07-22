import { Link } from 'react-router-dom';
import team1 from '../../assets/images/equipo-yesica-gonzalez.jpeg';
import team2 from '../../assets/images/equipo-verena-villafane.jpeg';
import heroImg from '../../assets/images/hero-portada.jpg';
import contactImg from '../../assets/images/consultorio-contacto.jpg';
import styles from './TeamIntro.module.css';

export default function TeamIntro() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.collageWrap}>
        <div className={styles.diagonalBg} aria-hidden="true" />
        <div className={styles.collage}>
          <img src={heroImg} alt="Equipo VIGO atendiendo a un paciente" className={styles.photoWide} />
          <img src={team1} alt="Od. Yesica González" className={styles.photo} />
          <img src={team2} alt="Od. Verena Villafañe" className={styles.photo} />
          <img src={contactImg} alt="Consultorio de VIGO" className={styles.photoWide} />
        </div>
      </div>

      <div className={styles.text}>
        <h1 className={styles.title}>
          Conocé <span className="accent">al equipo VIGO</span>
        </h1>
        <p className={styles.paragraph}>
          VIGO nació en octubre de 2022, de la inquietud de dos colegas y amigas que querían
          ejercer su profesión de forma independiente, con un lugar propio. Nuestro objetivo es
          que cada paciente vuelva a casa conforme con la calidad del trabajo — recuperando no
          solo su salud bucal, sino también su sonrisa y esa sensación de calidez humana.
        </p>
        <Link to="/servicios" className={styles.link}>
          Ver todos los tratamientos →
        </Link>
      </div>
    </div>
  );
}
