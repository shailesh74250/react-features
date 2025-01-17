import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  label, 
  onClick, 
  disabled,
  ...rest
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