import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import css from './Layout.module.css';
import AppBar from '../AppBar/AppBar';

export default function Layout() {
  return (
    <>
      <AppBar container={css.container} />
      <Suspense fallback={null}>
        <main className={css.container}>
          <Outlet />
        </main>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
