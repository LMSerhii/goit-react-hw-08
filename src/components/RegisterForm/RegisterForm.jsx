import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './RegisterForm.module.css';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';

const initialValues = { username: '', email: '', password: '' };

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export default function RegisterForm() {
  const nameId = useId();
  const emailId = useId();
  const pswId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div>
          <label className={css.label} htmlFor={nameId}></label>
          <Field className={css.field} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
        </div>
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
            className={css.errorMsg}
            name="password"
            component="span"
          />
        </div>
        <Button className={css.btn} type="submit">
          Register
        </Button>
      </Form>
    </Formik>
  );
}
