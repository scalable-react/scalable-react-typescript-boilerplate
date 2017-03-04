import * as React from 'react';
import { Img } from './styles';
import { Props } from './types';

export default function Image({
  ...props,
}: Props): JSX.Element {
  return(
    <Img {...props} />
  );
};
