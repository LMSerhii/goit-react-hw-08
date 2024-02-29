import { useFormik } from 'formik';
import * as yup from 'yup';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { Button, TextField } from '@mui/material';

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
