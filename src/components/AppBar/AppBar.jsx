import { useAuth } from '../../hooks';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';

export default function AppBar({ container }) {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <div className={container}>
        <div className={css.navigation}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </header>
  );
}
