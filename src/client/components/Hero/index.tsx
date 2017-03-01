import * as React from 'react';
import Component from './styles';
import { HeroProps } from './types';

export default function Hero({
  children,
  color,
}: HeroProps): JSX.Element {
  const colorProp = color || '#2d2d2d';
  return (
    <Component color={colorProp}>
      {children}
    </Component>
  );
};
