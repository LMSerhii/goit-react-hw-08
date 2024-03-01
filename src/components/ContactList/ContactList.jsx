import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { getRandomTransparentColor } from '../../helpers/getRandomTransparentColor';
import { Typography } from '@mui/material';

export default function ContactList({ contacts }) {
  return contacts.length <= 0 ? (
    <Typography variant="body1" fontSize={28} gutterBottom>
      No contacts yet.
    </Typography>
  ) : (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        const randomColor = getRandomTransparentColor();
        return (
          <li key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              randomColor={randomColor}
            />
          </li>
        );
      })}
    </ul>
  );
}
