import * as React from 'react';
import { FooterComponent } from './styles';

export interface Props extends React.Props<typeof Footer> {
  color?: string;
}
export default function Footer({
  color,
  children,
}: Props): JSX.Element {
  const colorProp = color || '#0a0a0a';
  return (
    <FooterComponent color={colorProp}>
      {children}
    </FooterComponent>
  );
};
