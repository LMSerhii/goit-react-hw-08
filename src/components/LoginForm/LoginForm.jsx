import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Button, TextField } from '@mui/material';
import toast from 'react-hot-toast';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string('Enter your password').required('Password is required'),
});

export default function LoginForm() {
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
