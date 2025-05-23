import { AtSign } from 'lucide-react';
import styles from './RecoverForm.module.scss';

export default function RecoverForm() {
  return (
    <>
      <h1>Recupere sua senha</h1>
      <p className={styles.instruction}>
        Preencha seu email para envio do link de recuperação da sua senha
      </p>
      <form className={styles.form}>
        <label htmlFor="email">
          <AtSign size={36} />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
          />
        </label>
        <button className={styles.btn} type="submit">
          Enviar e-mail
        </button>
      </form>
    </>
  );
}
