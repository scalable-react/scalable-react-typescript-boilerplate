import * as React from 'react';
import Component from './styles';
import IBoxProps from './types';

export default function Box(props: IBoxProps) {
  const { children, ...rest } = props;
  return (
    <Component {...rest}>
      {children || null}
    </Component>
  );
};
