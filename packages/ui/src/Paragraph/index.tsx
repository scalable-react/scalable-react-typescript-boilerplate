import styled, { ThemeProps } from 'styled-components';
import { style } from './styles';

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

export interface Props {
  color?: string;
  textAlign?: string;
  paragraphSize?: ParagraphSize;
  margin?: Margin;
}

export { ThemeProps };
const Paragraph = styled.p`
  ${style}
`;

export default Paragraph;
