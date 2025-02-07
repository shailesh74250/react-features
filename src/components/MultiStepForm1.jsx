import { useState } from 'react';

export const MultiStepForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
  });
  
  const [formStep, setFormStep] = useState(1);

  const handleNext = () => {
    setFormStep((step) => step + 1);
  }

  const handlePrevious = () => {
    setFormStep((step) => step - 1);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit}>
      {formStep === 1 && 
      <div className='1'>
        <p>Email:</p>
        <input type="email" required onChange={(event) => setData({...data, email: event.target.value})}/> <br/>
        <button type="button" onClick={handleNext}>Next</button>
      </div>}
      {formStep === 2 && 
      <div className='2'>
        <p>Password:</p>
        <input type="password" required onChange={(event) => setData({...data, password: event.target.value})} /><br/>
        <button type="button" onClick={handlePrevious}>Previous</button>
        <button type="button" onClick={handleNext}>Next</button>
      </div>}
      {formStep === 3 && 
      <div className='3'>
        <p>Name:</p>
        <input type="name" required onChange={(event) => setData({...data, name: event.target.value})} /><br/>
        <button type="button" onClick={handlePrevious}>Previous</button>
        <button type="submit">Submit</button>
      </div>}
    </form>
  );
};
