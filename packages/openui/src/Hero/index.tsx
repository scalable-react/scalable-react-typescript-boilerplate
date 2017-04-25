import * as React from 'react';
import Component from './styles';

export interface Props extends React.HTMLProps<typeof Hero> {
  backgroundColor?: string;
  backgroundImage?: string;
  full?: boolean;
  height?: string | number;
}
export default function Hero({
  children,
  backgroundColor,
  full = false,
  backgroundImage,
  height,
}: Props): JSX.Element {
  const colorProp = backgroundColor || '#2d2d2d';
  const props = { height, backgroundImage, backgroundColor: colorProp, full };
  return (
    <Component {...props}>
      {children}
    </Component>
  );
};
