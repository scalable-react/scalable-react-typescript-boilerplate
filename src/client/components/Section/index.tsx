import * as React from 'react';
import Component from './styles';
import IBoxProps from '../Box/types';

export default function Section(props: IBoxProps) {
  const { children, ...rest } = props;
  return (
    <Component {...rest}>
      {children}
    </Component>
  );
};
