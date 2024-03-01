import { useSelector } from 'react-redux';
import css from './Contacts.module.css';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import ContactList from '../ContactList/ContactList';
import {
  selectError,
  selectFiltredContacts,
  selectIsLoading,
  selectfiltredFavoriteContacts,
} from '../../redux/contacts/selectors';
import BlockHeader from '../BlockHeader/BlockHeader';
import BasicSpeedDial from '../SpeedDeal/SpeedDeal';
import AirSearch from '../AirSearch/AirSearch';
import { useState } from 'react';

export default function Contacts() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFavoriteVisible, setIsFavoriteVisible] = useState(false);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filtredContacts = useSelector(selectFiltredContacts);
  const filtredFavoriteContacts = useSelector(selectfiltredFavoriteContacts);

  return (
    <div className={css.wrapper}>
      <BlockHeader>Your {isFavoriteVisible && 'favorite'} contacts</BlockHeader>
      <AirSearch isVisible={isVisible} />
      <BasicSpeedDial
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setIsFavoriteVisible={setIsFavoriteVisible}
      />
      {isLoading && !error && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Loading />
        </div>
      )}
      {error && <Error>{error}</Error>}
      {!isLoading && !error && isFavoriteVisible ? (
        <ContactList contacts={filtredFavoriteContacts} />
      ) : (
        <ContactList contacts={filtredContacts} />
      )}
    </div>
  );
}
