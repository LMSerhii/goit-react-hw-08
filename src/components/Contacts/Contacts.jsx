import { useSelector } from 'react-redux';
import css from './Contacts.module.css';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import ContactList from '../ContactList/ContactList';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import BlockHeader from '../BlockHeader/BlockHeader';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div className={css.wrapper}>
      <BlockHeader>Your contacts</BlockHeader>
      {isLoading && !error && <Loading />}
      {error && <Error>{error}</Error>}
      {!isLoading && !error && <ContactList />}
    </div>
  );
}
