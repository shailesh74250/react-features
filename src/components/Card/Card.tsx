import cardStyle from "./Card.module.scss";
import { CardProps } from "./CardPropsType";
import Image from "../Image";

export const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div
      className={cardStyle.card}
    >
      <div className="card-header">
        <Image src="https://t3.ftcdn.net/jpg/03/36/97/58/360_F_336975809_VvYkV1QZX2E8igeS3kYpcBGiMcK6zWpL.jpg" alt="placeholder" load="lazy" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        {children}
      </div>
    </div>
  );
};