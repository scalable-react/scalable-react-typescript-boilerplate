import * as React from 'react';
import Component from './styles';
import Props from './types';

export default function Box({
  children,
  ...rest,
}: Props): JSX.Element {
  return (
    <Component {...rest}>
      {children || null}
    </Component>
  );
};
