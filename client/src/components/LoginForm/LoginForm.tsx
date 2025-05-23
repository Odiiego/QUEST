import { AtSign, Lock } from 'lucide-react';
import styles from './LoginForm.module.scss';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  return (
    <>
      <h1>Bem Vindo</h1>
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
        <label htmlFor="password">
          <Lock size={36} />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
        </label>
        <button className={styles.btn} type="submit">
          Entrar
        </button>
      </form>

      <div className={styles.links}>
        <p>
          Ainda não tem conta?{' '}
          <Link to="/register" className={styles.link}>
            Criar Conta
          </Link>
        </p>
        <p>
          Esqueceu sua senha?{' '}
          <Link to="/recover" className={styles.link}>
            Redefinir minha senha
          </Link>
        </p>
      </div>
    </>
  );
}
