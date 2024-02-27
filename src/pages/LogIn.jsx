import { Helmet } from 'react-helmet-async';
import LoginForm from '../components/LoginForm/LoginForm';

export default function LogIn() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
