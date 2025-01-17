export type ButtonVariant = "primary" | "secondary" | "danger"; // Define button styles

export interface ButtonProps {
  variant?: ButtonVariant;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}