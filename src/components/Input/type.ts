type inputType = "text" | "password" | "email" | "number" | "checkbox" | "radio" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "color";

export interface InputProps {
  type: inputType;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}