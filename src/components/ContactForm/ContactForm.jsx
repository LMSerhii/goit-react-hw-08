import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';

const validationSchema = yup.object({
  name: yup
    .string('Enter contact name')
    .min(2, 'Name too short!')
    .max(50, 'Name too long!')
    .required('Name is required'),
  number: yup.string('Enter contact number').required('Number is required'),
});

export default function ContactForm({ initialValues, onSubmit, action }) {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ marginBottom: '35px' }}
          autoComplete="off"
        />
        <TextField
          fullWidth
          id="number"
          name="number"
          label="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          sx={{ marginBottom: '20px' }}
          autoComplete="off"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          {action}
        </Button>
      </form>
    </div>
  );
}
