export type Size = 'none' | 'small' | 'medium' | 'large';
export interface ISizeObject { horizontal?: Size; vertical?: Size; };
export type BoxSize =  'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'full';
export interface IBoxSize { horizontal?: BoxSize; vertical?: BoxSize; };

interface IBoxProps {
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
  direction?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  wrap?: boolean;
  reverse?: boolean;
  size?: BoxSize | IBoxSize;
  pad?: Size | ISizeObject;
  children?: JSX.Element;
  margin?: Size | ISizeObject;
  backgroundColor?: string;
  backgroundImage?: string;
};

export default IBoxProps;
