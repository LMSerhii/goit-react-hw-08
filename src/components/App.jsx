import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './Loading/Loading';
import Layout from './Layout/Layout';
import NotFound from '../pages/NotFound';
import AppBar from './AppBar/AppBar';
import { fetchContacts } from '../redux/contacts/operations';

const Home = lazy(() => import('../pages/Home'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
