import * as React from 'react';
import Component from './styles';
import { ParagraphProps } from './types';

export default function Paragraph({
  children,
  ...rest,
}: ParagraphProps): JSX.Element {
  return (
    <Component {...rest}>
      {children}
    </Component>
  );
};
