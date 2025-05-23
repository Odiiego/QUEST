import styles from './FormContainer.module.scss';
import logo from '../../assets/QUEST.png';

export default function FormContainer({ children }) {
  return (
    <main className={styles.container}>
      <div>
        <img className={styles.logo} src={logo} alt="QUEST" />
        <section className={styles.formWrapper}>{children}</section>
      </div>
    </main>
  );
}
