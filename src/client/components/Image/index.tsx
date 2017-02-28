import * as React from 'react';
import { Img } from './styles';
import { ImageProps } from './types';

export default function Image({
  ...props,
}: ImageProps): JSX.Element {
  return(
    <Img {...props} />
  );
};
