import * as yup from 'yup';

const step1Schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
});

const step2Schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
});

const step3Schema = yup.object().shape({
  file: yup.mixed().test('required', 'File is required', (value) => {
    return value && value.length > 0;
  }),
});

// Combine schemas into an array
export const validationSchemas = [step1Schema, step2Schema, step3Schema];
