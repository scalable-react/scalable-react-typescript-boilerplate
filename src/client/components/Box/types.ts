import * as React from 'react';
import Box from './';

export type Size = 'none' | 'small' | 'medium' | 'large';
export interface SizeObject { horizontal?: Size; vertical?: Size; };
export type BoxSize =  'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'full';
export interface BoxSizeObject { horizontal?: BoxSize; vertical?: BoxSize; };
export interface FullObject { horizontal: boolean; vertical: boolean; };
export type Full = boolean | FullObject;
export type WrapOption = 'wrap' | 'wrap-reverse' | 'nowrap';
export type Rem = number;
export type Px = number;

export interface SizeStyle {
  height: string;
  width: string;
}

interface BoxProps extends React.HTMLProps<typeof Box> {
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
  flexDirection?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  flexWrap?: boolean;
  reverse?: boolean;
  boxSize?: BoxSize | BoxSizeObject;
  pad?: Size | SizeObject;
  children?: JSX.Element;
  margin?: Size | SizeObject;
  backgroundColor?: string;
  backgroundImage?: string;
  full?: boolean | { horizontal?: boolean, vertical?: boolean };
};

export default BoxProps;
