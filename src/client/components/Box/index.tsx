import * as React from 'react';
import Component from './styles';
import BoxProps from './types';

export default function Box({
  children,
  ...rest,
}: BoxProps) {
  return (
    <Component {...rest}>
      {children || null}
    </Component>
  );
};
