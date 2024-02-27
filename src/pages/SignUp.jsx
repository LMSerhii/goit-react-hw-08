import { Helmet } from 'react-helmet-async';
import RegisterForm from '../components/RegisterForm/RegisterForm';

export default function SignUp() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
