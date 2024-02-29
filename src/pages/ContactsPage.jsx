import { useDispatch } from 'react-redux';
import AddContact from '../components/AddContact/AddContact';
import Aside from '../components/Aside/Aside';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import Contacts from '../components/Contacts/Contacts';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import SearchBox from '../components/SearchBox/SearchBox';
import BasicSpeedDial from '../components/SpeedDeal/SpeedDeal';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HomeLayout>
      {/* <Aside>
        <SearchBox />
        <AddContact />
      </Aside> */}
      <Contacts />
    </HomeLayout>
  );
}
