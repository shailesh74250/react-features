import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchemas } from './multi-step-form-validation-schema';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemas[step]), // Validate current step
    mode: 'onBlur', // Validate on blur
  });

  // Handle form submission
  const onSubmit = (data) => {
    if (step < validationSchemas.length - 1) {
      setStep(step + 1); // Move to the next step
    } else {
      console.log('Final Form Data:', data);
      alert('Form submitted successfully!');
    }
  };

  // Move to previous step
  const handleBack = () => setStep(step - 1);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step === 0 && (
        <>
          <h2>Step 1: Personal Information</h2>
          <input {...register('firstName')} placeholder="First Name" />
          <p>{errors.firstName?.message}</p>

          <input {...register('lastName')} placeholder="Last Name" />
          <p>{errors.lastName?.message}</p>
        </>
      )}

      {step === 1 && (
        <>
          <h2>Step 2: Contact Details</h2>
          <input {...register('email')} placeholder="Email" />
          <p>{errors.email?.message}</p>

          <input {...register('phone')} placeholder="Phone Number" />
          <p>{errors.phone?.message}</p>
        </>
      )}

      {step === 2 && (
        <>
          <h2>Step 3: Upload File</h2>
          <input type="file" {...register('file')} />
          <p>{errors.file?.message}</p>
        </>
      )}

      <div>
        {step > 0 && <button type="button" onClick={handleBack}>Back</button>}
        <button type="button" onClick={async () => {
          const valid = await trigger();
          if (valid) onSubmit();
        }}>
          {step === validationSchemas.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </form>
  );
};

export default MultiStepForm;
