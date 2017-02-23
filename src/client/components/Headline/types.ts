import Headline from './index';
export type TextAligment = 'center' | 'left' | 'right' | 'justify';
export type Px = number;
export type Rem = number;
export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
export type HeadlineSize = 'small' | 'medium' | 'xlage' | 'xlarge';
export interface SizeMap {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
};

export interface HeadlineProps extends React.Props<Headline> {
  color?: string;
  textAlign?: string;
  size?: HeadlineSize;
  fontWeight?: FontWeight;
}
