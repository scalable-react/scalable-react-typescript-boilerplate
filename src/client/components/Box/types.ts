export type Size = 'small' | 'medium' | 'large';
export interface ISizeObject { horizontal?: Size; vertical?: Size; };

interface IBoxProps {
  alignItems: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
  direction: 'row' | 'column';
  justifyContent: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  wrap?: boolean;
  reverse?: boolean;
  size?: Size;
  pad?: Size | ISizeObject;
  children: JSX.Element;
  margin?: Size | ISizeObject;
};

export default IBoxProps;
