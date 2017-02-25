import * as React from 'react';
import Component from './styles';
import { ParagraphProps } from './types';

class Paragraph extends React.Component<ParagraphProps, undefined> {
  public static defaultProps: ParagraphProps = {
    color: '#fff',
    textAlign: 'center',
    size: 'medium',
    margin: 'medium',
  };
  public render() {
    const { children, ...rest } = this.props;
    return (
      <Component {...rest}>
        {children}
      </Component>
    );
  }
}

export default Paragraph;
