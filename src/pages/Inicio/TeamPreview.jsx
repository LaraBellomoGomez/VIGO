import team1 from '../../assets/images/equipo-yesica-gonzalez.jpeg';
import team2 from '../../assets/images/equipo-verena-villafane.jpeg';
import { team } from '../../data/content';
import styles from './TeamPreview.module.css';

const photosByKey = { team1, team2 };

export default function TeamPreview() {
  return (
    <div className={styles.grid}>
      {team.map((member) => (
        <div key={member.name} className={styles.card}>
          <img
            src={photosByKey[member.photoKey]}
            alt={`${member.name}, ${member.role}`}
            className={styles.photo}
          />
          <p className={styles.name}>{member.name}</p>
          <p className={styles.role}>{member.role}</p>
        </div>
      ))}
    </div>
  );
}
