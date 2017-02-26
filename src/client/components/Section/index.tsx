import * as React from 'react';
import Component from './styles';
import BoxProps from '../Box/types';

export default function Section({
  children,
  ...rest,
}: BoxProps): JSX.Element {
  return (
    <Component {...rest}>
      {children}
    </Component>
  );
};
