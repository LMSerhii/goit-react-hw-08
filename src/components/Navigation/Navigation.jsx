import { Link, NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { clsx } from 'clsx';
import Logo from '../Logo/Logo';
import { useAuth } from '../../hooks';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.nav}>
      <Link to="/" className={css.logo}>
        <Logo />
      </Link>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
