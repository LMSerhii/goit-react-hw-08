import { RiContactsBookFill } from 'react-icons/ri';
import css from './Logo.module.css';

export default function Logo() {
  return (
    <h1 className={css.logo}>
      Phone Book <RiContactsBookFill />
    </h1>
  );
}
