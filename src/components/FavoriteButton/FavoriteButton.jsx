import { Fab } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/contacts/contactsSlice';

export default function FavoriteButton({ id, name, number }) {
  const dispatch = useDispatch();

  const handleClick = () => {
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
