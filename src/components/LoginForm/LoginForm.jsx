import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import css from './LoginFrom.module.css';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Button, TextField } from '@mui/material';
import toast from 'react-hot-toast';
import styled from '@emotion/styled';

const initialValues = { email: '', password: '' };

// const LoginSchema = Yup.object().shape({
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(8, 'Password must be at least 8 characters')
//     .required('Password is required'),
// });

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string('Enter your password').required('Password is required'),
});

export default function LoginForm() {
  // const emailId = useId();
  // const pswId = useId();
  // const dispatch = useDispatch();

  // const handleSubmit = (values, actions) => {
  //   dispatch(logIn(values))
  //     .unwrap()
  //     .then(() => {
  //       toast.success('Successully log in');
  //       actions.resetForm();
  //     })
  //     .catch(() => toast.error('Check your email or password'));
  // };

  // return (
  //   <Formik
  //     initialValues={initialValues}
  //     onSubmit={handleSubmit}
  //     validationSchema={LoginSchema}
  //   >
  //     <Form className={css.form} autoComplete="off">
  //       <div>
  //         <label className={css.label} htmlFor={emailId}></label>
  //         <Field
  //           className={css.field}
  //           type="email"
  //           name="email"
  //           id={emailId}
  //           autoComplete="username"
  //         />
  //         <ErrorMessage
  //           className={css.errorMsg}
  //           name="email"
  //           component="span"
  //         />
  //       </div>

  //       <div>
  //         <label className={css.label} htmlFor={pswId}></label>
  //         <Field
  //           className={css.field}
  //           type="password"
  //           name="password"
  //           id={pswId}
  //           autoComplete="current-password"
  //         />
  //         <ErrorMessage
  //           className={css.errorPsw}
  //           name="password"
  //           component="span"
  //         />
  //       </div>
  //       <Button type="submit">Log In</Button>
  //     </Form>
  //   </Formik>
  // );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(logIn(values))
        .unwrap()
        .then(() => {
          toast("OK, you're in!", {
            icon: '💪',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
          actions.resetForm();
        })
        .catch(() =>
          toast('Check your email or password!', {
            icon: '🤔',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          })
        );
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ marginBottom: '35px' }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ marginBottom: '20px' }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
}
