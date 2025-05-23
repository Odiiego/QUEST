import styles from './Home.module.scss';
import logo from '../../assets/QUEST.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className={styles.home}>
      <img className={styles.logo} src={logo} alt="QUEST" />
      <Link to="/login" className={styles.btn}>
        JOGAR
      </Link>
    </main>
  );
}
