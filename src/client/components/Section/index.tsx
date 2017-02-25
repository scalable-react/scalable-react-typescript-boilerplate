import * as React from 'react';
import Component from './styles';
import BoxProps from '../Box/types';

export default function Section({
  children,
  ...rest,
}: BoxProps) {
  return (
    <Component {...rest}>
      {children}
    </Component>
  );
};
