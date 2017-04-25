export type Size = 'none' | 'small' | 'medium' | 'large' | 'xlarge';
export interface SizeObject { horizontal?: Size; vertical?: Size; };
export type Breakpoint = 'mobile' | 'tablet' | 'desktop';
export interface ResponsiveSize {
  mobile?: Size | SizeObject,
  tablet?: Size | SizeObject,
  desktop?: Size | SizeObject,
}
export type BoxSize =  'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'full';
export interface BoxSizeObject { horizontal?: BoxSize; vertical?: BoxSize; };
export interface FullObject { horizontal?: boolean; vertical?: boolean; };
export type Full = boolean | FullObject;
export type WrapOption = 'wrap' | 'wrap-reverse' | 'nowrap';
export type Rem = number;
export type Px = number;

export interface SizeStyle {
  height: string;
  width: string;
}

export interface Props {
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
  full?: Full;
  selectable?: boolean;
  style?: {};
  className?: string;
};

export default Props;
