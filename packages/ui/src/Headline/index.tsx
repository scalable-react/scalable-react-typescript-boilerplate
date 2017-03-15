import * as React from 'react';
import { HeadlineStyled } from './styles';
import { Margin } from '../Paragraph/types';
export type TextAligment = 'center' | 'left' | 'right' | 'justify';
export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
export type HeadlineSize = 'small' | 'medium' | 'xlage' | 'xlarge';
export interface SizeMap {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
};

export interface Props {
  color?: string;
  textAlign?: string;
  fontSize?: HeadlineSize;
  fontWeight?: FontWeight;
  margin?: Margin;
}

class Headline extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    color: '#000000',
    textAlign: 'center',
    fontSize: 'medium',
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
}

export default Headline;
