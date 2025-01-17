import { InputProps } from "./type";

const Input: React.FC<InputProps> = ({
  type,
  value,
  handleChange,
  placeholder
 }) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}
  
export default Input;