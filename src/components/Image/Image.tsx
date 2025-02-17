import imgStyle from "./Image.module.scss";
import { ImageProps } from "./ImagePropsType";

export const Image: React.FC<ImageProps> = ({
  src, 
  alt, 
  load,
}) => {
  return (
    <img 
      className={imgStyle.image}
      src={src} 
      alt={alt} 
      loading={load} 
    />
  );
};