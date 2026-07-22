import team1 from '../../assets/images/equipo-yesica-gonzalez.jpeg';
import team2 from '../../assets/images/equipo-verena-villafane.jpeg';
import styles from './TeamProfile.module.css';

const photosByKey = { team1, team2 };

export default function TeamProfile({ member }) {
  return (
    <div className={styles.row}>
      <div className={styles.photoCard}>
        <img src={photosByKey[member.photoKey]} alt={`${member.name}, ${member.role}`} className={styles.photo} />
        <p className={styles.name}>{member.name}</p>
        <p className={styles.role}>{member.role}</p>
      </div>
      <p className={styles.bio}>{member.bio}</p>
    </div>
  );
}
