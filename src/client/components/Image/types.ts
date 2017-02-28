import * as React from 'react'; 
import Image from './';

export type ImageSize = 'xxsmall' | 'xmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface ImageProps extends React.Props<typeof Image> {
  size?: ImageSize;
  src: string;
  alt: string;
}
