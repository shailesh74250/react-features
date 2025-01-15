import './input.css';

function Input({type, onChange, isDisabled}) {
  return (
    <input 
      type={type}
      onChange={onChange}
      disabled={isDisabled} 
    />
  );
}

export default Input;