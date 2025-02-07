import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters'),
  gender: yup.string().required('Select gender'),
  preferences: yup.array().of(yup.string()).min(1, 'At least one prefrence required'),
  chat: yup.string().required('Textarea cannot be empty'),
  country: yup.string().required('Select country'),
  document: yup.mixed().test('required', 'File is required', (value) => value && value.length > 0)
  .test('fileSize', 'File size should be less than 5MB', (value) => {
    return value && value[0]?.size <= 5 * 1024 * 1024;
  })
  .test('fileType', 'Only JPEG, PNG, and PDF files are allowed', (value) => {
    return value && ['image/jpeg', 'image/png', 'application/pdf'].includes(value[0]?.type);
  }),
});

/*
✅ Ensures a file is required
✅ Validates file type (JPEG, PNG, PDF, etc.)
✅ Restricts file size (5MB limit)
*/

function ReactHookForm() {
  const { register, handleSubmit, watch, formState: { errors }  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { 
      name: 'abc', 
    },
  });

  const onSubmit = data => console.log(data);

  // console.log(watch("name")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          {...register('name', { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          name="email"
          {...register('email')}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          {...register('password')}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            {...register('gender')}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            {...register('gender')}
          />
          Female
        </label>
        {errors.gender && <span>{errors.gender.message}</span>}
      </div>
      <div>
        <label>
          Subscribe to Newsletter:
          <input
            type="checkbox"
            name="subscription"
            {...register('subscription')}
          />
          {errors.subscription && <span>{errors.subscription.message}</span>}
        </label>
      </div>
      <div>
        <label>Preferences:</label>
        <select
          name="preferences"
          {...register('preferences')}
          multiple
        >
          <option value="React">React</option>
          <option value="Node">Node</option>
          <option value="JavaScript">JavaScript</option>
        </select>
        {errors.preferences && <span>{errors.preferences.message}</span>}
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="chat"
          {...register('chat')}
        />
        {errors.chat && <span>{errors.chat.message}</span>}
      </div>
      <div>
        <label>Country:</label>
        <select
          name="country"
          {...register('country')}
        >
          <option value=''>Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
        {errors.country && <span>{errors.country.message}</span>}
      </div>
      <div>
        <label>Upload file:</label>
        <input 
          type="file" 
          name="document"
          {...register('document')} 
        />
        {errors.document && <span>{errors.document.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReactHookForm;