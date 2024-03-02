import { Link, NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import css from './Navigation.module.css';
import Logo from '../Logo/Logo';
import { useAuth } from '../../hooks';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation({ mediaQuery }) {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <Link to="/">
        <Logo />
      </Link>
      {!mediaQuery && (
        <div className={css.navMenu}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/contacts" className={buildLinkClass}>
              Contacts
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
}
