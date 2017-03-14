import { Margin } from '../Paragraph/types';
import styled from 'styled-components';
import { HeadlineStyle } from './styles';

export type TextAligment = 'center' | 'left' | 'right' | 'justify';
export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
export type HeadlineSize = 'small' | 'medium' | 'xlage' | 'xlarge';
export interface SizeMap {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
};

export interface HeadlineProps {
  color?: string;
  textAlign?: string;
  size?: HeadlineSize;
  fontWeight?: FontWeight;
  margin?: Margin;
}

/*class Headline extends React.Component<HeadlineProps, undefined> {
  public static defaultProps: HeadlineProps = {
    color: '#000000',
    textAlign: 'center',
    size: 'medium',
    fontWeight: 400,
    margin: 'medium',
  };
  public render() {
    const { children, ...rest } = this.props;
    return (
      <HeadlineStyled {...rest}>
        {children}
      </HeadlineStyled>
    );
  }
}*/

export const Headline = styled.h1`
 ${HeadlineStyle}
`;

export default Headline;
