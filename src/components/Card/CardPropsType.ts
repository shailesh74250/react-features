export interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  imageUrl?: string;
  onClick?: () => void;
  className?: string;
}