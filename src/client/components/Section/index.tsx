import * as React from 'react';
import Component from './styles';
import BoxProps from '../Box/types';

export default function Section(props: BoxProps) {
  const { children, ...rest } = props;
  return (
    <Component {...rest}>
      {children}
    </Component>
  );
};
