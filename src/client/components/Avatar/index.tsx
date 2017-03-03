import * as React from 'react';
import { Props } from './types';
import Component from './styles';

export default function Avatar({
  src,
  ...rest,
}: Props): JSX.Element {
  const url = src || 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/no-user.png';
  return (
    <Component {...rest} src={url} />
  );
};
