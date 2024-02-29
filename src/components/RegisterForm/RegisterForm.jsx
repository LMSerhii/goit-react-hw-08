import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { useId } from 'react';
import css from './RegisterForm.module.css';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { Button, TextField } from '@mui/material';

// const initialValues = { name: '', email: '', password: '' };

// const RegisterSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, 'Too short')
//     .max(50, 'Too long')
//     .required('Username is required'),
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(8, 'Password must be at least 8 characters')
//     .required('Password is required'),
// });

const validationSchema = yup.object({
  username: yup
    .string('Enter your name')
    .min(3, 'Name too short')
    .max(50, 'Name too long')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export default function RegisterForm() {
  // const nameId = useId();
  // const emailId = useId();
  // const pswId = useId();
  // const dispatch = useDispatch();

  // const handleSubmit = (values, actions) => {
  //   dispatch(register(values))
  //     .unwrap()
  //     .then(() => {
  //       toast.success('Successfully registartion');
  //       actions.resetForm();
  //     })
  //     .catch(() => toast.error('This user already exist!'));
  // };

  // return (
  //   <Formik
  //     initialValues={initialValues}
  //     onSubmit={handleSubmit}
  //     validationSchema={RegisterSchema}
  //   >
  //     <Form className={css.form} autoComplete="off">
  //       <div>
  //         <label className={css.label} htmlFor={nameId}></label>
  //         <Field className={css.field} type="text" name="name" id={nameId} />
  //         <ErrorMessage className={css.errorMsg} name="name" component="span" />
  //       </div>
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
  //           className={css.errorMsg}
  //           name="password"
  //           component="span"
  //         />
  //       </div>
  //       <Button className={css.btn} type="submit">
  //         Register
  //       </Button>
  //     </Form>
  //   </Formik>
  // );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(
        register({
          name: values.username,
          email: values.email,
          password: values.password,
        })
      )
        .unwrap()
        .then(() => {
          toast('Successfully registartion!', {
            icon: '🚀',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
          actions.resetForm();
        })
        .catch(() =>
          toast('This user already exist!', {
            icon: '🤷‍♂️',
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
          id="username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          sx={{ marginBottom: '35px' }}
          autoComplete="username"
        />
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
          autoComplete="current-password"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
}
