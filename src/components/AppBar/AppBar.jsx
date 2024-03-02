import { useMediaQuery } from '@mui/material';
import { useAuth } from '../../hooks';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';
import json2mq from 'json2mq';

export default function AppBar({ container }) {
  const { isLoggedIn } = useAuth();

  const mediaMatches1024 = useMediaQuery(
    json2mq({
      minWidth: 1024,
    })
  );

  const mobileMedia = useMediaQuery(
    json2mq({
      maxWidth: 767,
    })
  );

  return (
    <header className={css.header}>
      <div className={container}>
        <div className={css.navigation}>
          <Navigation mediaQuery={mobileMedia} />
          {!mobileMedia &&
            (isLoggedIn ? (
              <UserMenu mediaQuery={mediaMatches1024} />
            ) : (
              <AuthNav />
            ))}
        </div>
      </div>
    </header>
  );
}
