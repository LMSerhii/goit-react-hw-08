import css from './Main.module.css';

export default function Main({ children }) {
  return <div className={css.wrapper}>{children}</div>;
}
