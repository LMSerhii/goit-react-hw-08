import { useSelector } from 'react-redux';
import css from './Contacts.module.css';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import ContactList from '../ContactList/ContactList';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import BlockHeader from '../BlockHeader/BlockHeader';
import BasicSpeedDial from '../SpeedDeal/SpeedDeal';
import AirSearch from '../AirSearch/AirSearch';
import { useState } from 'react';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={css.wrapper}>
      <BlockHeader>Your contacts</BlockHeader>
      <AirSearch isVisible={isVisible} />
      <BasicSpeedDial isVisible={isVisible} setIsVisible={setIsVisible} />
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
      {!isLoading && !error && <ContactList />}
    </div>
  );
}
