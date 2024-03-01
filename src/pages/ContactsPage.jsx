import { useDispatch } from 'react-redux';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import Contacts from '../components/Contacts/Contacts';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HomeLayout>
      <Contacts />
    </HomeLayout>
  );
}
