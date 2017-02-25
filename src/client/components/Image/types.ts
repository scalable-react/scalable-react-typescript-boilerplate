import Image from './';

export type ImageSize = 'xxsmall' | 'xmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface ImageProps extends React.Props<Image> {
  size?: ImageSize;
  src: string;
  alt: string;
}
