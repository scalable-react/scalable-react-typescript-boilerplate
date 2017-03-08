import * as React from 'react';
import { HeadlineStyled } from './styles';
import { HeadlineProps } from './types';

class Headline extends React.Component<HeadlineProps, undefined> {
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
}

export default Headline;
