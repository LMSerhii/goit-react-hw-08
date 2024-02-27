import { useDispatch, useSelector } from 'react-redux';
import AddContact from '../components/AddContact/AddContact';
import Aside from '../components/Aside/Aside';
import Main from '../components/Main/Main';
import SearchBox from '../components/SearchBox/SearchBox';
import Loading from '../components/Loading/Loading';
import ContactList from '../components/ContactList/ContactList';
import Error from '../components/Error/Error';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HomeLayout>
      <Aside>
        <SearchBox />
        <AddContact />
      </Aside>
      <Main>
        {isLoading && !error && <Loading />}
        {error && <Error>{error}</Error>}
        {!isLoading && !error && <ContactList />}
      </Main>
    </HomeLayout>
  );
}
