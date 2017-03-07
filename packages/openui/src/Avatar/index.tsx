import * as React from 'react';
import { Props } from './types';
import Component from './styles';

export default function Avatar({
  ...props,
}: Props): JSX.Element {
  return (
    <Component {...props} />
  );
};
