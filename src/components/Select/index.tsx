import { SelectProps } from "./type";

const Select: React.FC<SelectProps> = ({
  value,
  handleChange,
  options,
  placeholder
}) => {
  return (
    <select value={value} onChange={handleChange}>
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
}
  
export default Select;