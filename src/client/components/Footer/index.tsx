import * as React from 'react';
import { FooterComponent } from './styles';
import { FooterProps } from './types';

export default function Footer({
  color,
  children,
}: FooterProps): JSX.Element {
  const colorProp = color || '#0a0a0a';
  return (
    <FooterComponent color={colorProp}>
      {children}
    </FooterComponent>
  );
};
