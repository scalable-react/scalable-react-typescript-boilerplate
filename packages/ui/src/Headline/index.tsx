import * as React from 'react';
import { HeadlineStyled } from './styles';
import { Margin } from '../Paragraph/types';
import { HeadlineSize, FontWeight } from './types';

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
