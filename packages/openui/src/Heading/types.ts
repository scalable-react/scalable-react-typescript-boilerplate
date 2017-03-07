import * as React from 'react';
import { Margin } from '../Paragraph/types';
import Heading from './index';
export type TextAligment = 'center' | 'left' | 'right' | 'justify';
export type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export type Margin = 'none' | 'small' | 'medium' | 'large';

export interface MarginSizeMap {
  none: number;
  small: number;
  medium: number;
  large: number;
}

export interface HeadingProps extends React.Props<Heading> {
  color?: string;
  textAlign?: string;
  tag?: Tag;
  truncate?: boolean;
  upcase?: boolean;
  margin?: Margin;
}
