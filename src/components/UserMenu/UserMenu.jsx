import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/slectors';
import { Avatar, Badge, Button, Typography } from '@mui/material';
import Contacts from '@mui/icons-material/Contacts';
import { selectContacts } from '../../redux/contacts/selectors';
import { deepPurple } from '@mui/material/colors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.wrapper}>
      <Badge badgeContent={contacts.length} color="primary">
        <Contacts sx={{ color: '#fff' }} />
      </Badge>
      <Typography className={css.username}>Welcome, {user.name} </Typography>
      <Avatar
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        sx={{ bgcolor: deepPurple[500] }}
      >
        {user.name[0]}
      </Avatar>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
}
