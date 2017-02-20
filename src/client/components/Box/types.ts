export type Size = 'none' | 'small' | 'medium' | 'large';
export interface ISizeObject { horizontal?: Size; vertical?: Size; };
export type BoxSize =  'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'full';
export interface IBoxSize { horizontal?: BoxSize; vertical?: BoxSize; };
export interface IFullObject { horizontal: boolean; vertical: boolean; };
export type Full = boolean | IFullObject;

interface IBoxProps {
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
  flexDirection?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  wrap?: boolean;
  reverse?: boolean;
  size?: BoxSize | IBoxSize;
  pad?: Size | ISizeObject;
  children?: JSX.Element;
  margin?: Size | ISizeObject;
  backgroundColor?: string;
  backgroundImage?: string;
  full?: boolean | { horizontal?: boolean, vertical?: boolean };
};

export default IBoxProps;
