import { RiContactsBookFill } from 'react-icons/ri';
import css from './Logo.module.css';
import { Typography } from '@mui/material';

export default function Logo() {
  return (
    <Typography variant="body1" className={css.logo} fontSize={28}>
      <RiContactsBookFill color={'#3399FF'} />
      Phone Book
    </Typography>
  );
}
