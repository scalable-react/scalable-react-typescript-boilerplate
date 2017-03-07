import * as React from 'react';
import Avatar from './';

export type ImageSize = 'thumb' | 'small' | 'medium' | 'large';
export interface Props extends React.Props<typeof Avatar> {
  src: string;
  name?: string;
  size?: ImageSize;
}
