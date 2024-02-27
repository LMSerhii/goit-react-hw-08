import { NavLink, Link } from 'react-router-dom';

import clsx from 'clsx';
import css from './AppBar.module.css';
import Title from '../Titile/Title';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AppBar() {
  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        <Title />
      </Link>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
      </nav>
    </header>
  );
}
