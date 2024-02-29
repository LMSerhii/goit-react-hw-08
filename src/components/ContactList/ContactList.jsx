import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { getRandomTransparentColor } from '../../helpers/getRandomTransparentColor';
import { selectFiltredContacts } from '../../redux/contacts/selectors';
import { Typography } from '@mui/material';

export default function ContactList() {
  const filtredContacts = useSelector(selectFiltredContacts);

  return filtredContacts.length <= 0 ? (
    <Typography variant="body1" fontSize={28} gutterBottom>
      No contacts yet.
    </Typography>
  ) : (
    <ul className={css.contactList}>
      {filtredContacts.map(({ id, name, number }) => {
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
