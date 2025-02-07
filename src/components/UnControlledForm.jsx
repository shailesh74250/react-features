import { useRef } from 'react';

export const UnControlledForm = () => {
  const emailRef = useRef();

  return (
    <form>
      <input type="email" ref={emailRef} required />
      <button type="submit">Submit</button>
    </form>
  );
};
