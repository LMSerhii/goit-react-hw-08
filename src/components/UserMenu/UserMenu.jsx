import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/slectors';
import { Badge, Button, Typography } from '@mui/material';
import Contacts from '@mui/icons-material/Contacts';
import { selectContacts } from '../../redux/contacts/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.wrapper}>
      <Badge badgeContent={contacts.length} color="primary">
        <Contacts sx={{ color: '#fff' }} />
      </Badge>
      <Typography className={css.username}>Welcome, {user.name}</Typography>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
}
