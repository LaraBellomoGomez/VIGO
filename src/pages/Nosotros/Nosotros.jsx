import { team } from '../../data/content';
import SectionHeading from '../../components/SectionHeading';
import TeamIntro from './TeamIntro';
import Highlights from './Highlights';
import TeamProfile from './TeamProfile';
import SimpleCta from './SimpleCta';
import styles from './Nosotros.module.css';

export default function Nosotros() {
  return (
    <div>
      <TeamIntro />

      <div className={`${styles.highlightsSection} container`}>
        <Highlights />
      </div>

      <div className="container">
        <SectionHeading title="Dentistas" accent="especializadas" />
        {team.map((member) => (
          <TeamProfile key={member.name} member={member} />
        ))}
      </div>

      <SimpleCta />
    </div>
  );
}
