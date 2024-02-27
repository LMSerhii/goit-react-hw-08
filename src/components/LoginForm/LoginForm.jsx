import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './LoginFrom.module.css';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Button } from '@mui/material';

const initialValues = { email: '', password: '' };

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export default function LoginForm() {
  const emailId = useId();
  const pswId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css.form} autoComplete="off">
        <div>
          <label className={css.label} htmlFor={emailId}></label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={emailId}
            autoComplete="username"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="email"
            component="span"
          />
        </div>

        <div>
          <label className={css.label} htmlFor={pswId}></label>
          <Field
            className={css.field}
            type="password"
            name="password"
            id={pswId}
            autoComplete="current-password"
          />
          <ErrorMessage
            className={css.errorPsw}
            name="password"
            component="span"
          />
        </div>
        <Button type="submit">Log In</Button>
      </Form>
    </Formik>
  );
}
