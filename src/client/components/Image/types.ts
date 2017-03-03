import * as React from 'react';
import Image from './';

export type ImageSize = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface Props extends React.Props<typeof Image> {
  size?: ImageSize;
  src: string;
  alt: string;
}
