import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import BlockHeader from '../BlockHeader/BlockHeader';
import { getRandomTransparentColor } from '../../helpers/getRandomTransparentColor';
import { selectFiltredContacts } from '../../redux/contacts/selectors';

export default function ContactList() {
  const filtredContacts = useSelector(selectFiltredContacts);

  return (
    <>
      <BlockHeader>Your contacts</BlockHeader>

      <ul className={css.contactList}>
        {filtredContacts.map(({ id, name, phone }) => {
          const randomColor = getRandomTransparentColor();

          return (
            <li key={id}>
              <Contact
                id={id}
                name={name}
                phone={phone}
                randomColor={randomColor}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
