import * as React from 'react';
import Paragraph from './index';
export type ParagraphSize = 'small' | 'medium' | 'large' | 'xlarge';
export type Margin = 'none' | 'small' | 'medium' | 'large';

export interface SizeMap {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

export interface MarginSizeMap {
  none: number;
  small: number;
  medium: number;
  large: number;
}

export interface ParagraphProps extends React.Props<typeof Paragraph> {
  color?: string;
  textAlign?: string;
  size?: ParagraphSize;
  margin?: Margin;
}
