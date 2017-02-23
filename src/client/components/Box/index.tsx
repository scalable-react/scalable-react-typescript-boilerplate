import * as React from 'react';
import Component from './styles';
import BoxProps from './types';

export default function Box(props: BoxProps) {
  const { children, ...rest } = props;
  return (
    <Component {...rest}>
      {children || null}
    </Component>
  );
};
