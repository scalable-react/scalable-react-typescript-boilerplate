import * as React from 'react';
import Component from './styles';
import Props from './types';

export default function Hero({
  children,
  backgroundColor,
}: Props): JSX.Element {
  const colorProp = backgroundColor || '#2d2d2d';
  return (
    <Component backgroundColor={colorProp}>
      {children}
    </Component>
  );
};
