import { Fab } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../redux/contacts/contactsSlice';
import { selectFvoriteContacts } from '../../redux/contacts/selectors';
import toast from 'react-hot-toast';

export default function FavoriteButton({ id, name, number }) {
  const dispatch = useDispatch();
  const favoriteContacts = useSelector(selectFvoriteContacts);

  const handleClick = () => {
    const existingContact = favoriteContacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (existingContact) {
      toast('This contact is already in your favourites!', {
        icon: '🧘🏼‍♀️',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          textAlign: 'center',
        },
      });
      return;
    }
    dispatch(
      addFavorite({
        id,
        name,
        number,
      })
    );
  };

  return (
    <Fab size="small" color="secondary" aria-label="like" onClick={handleClick}>
      <FavoriteIcon />
    </Fab>
  );
}
