export type ImageLoadEnum = 'eager' | 'lazy';

export interface ImageProps {
  src: string;
  alt: string;
  load?: ImageLoadEnum;
}