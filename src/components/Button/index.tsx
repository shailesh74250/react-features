import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({
  label, 
  onClick, 
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;