import * as React from 'react';
import { Margin } from '../Paragraph/types';
import { H1, H2, H3, H4, H5 } from './styles';

export type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface Props {
  color?: string;
  textAlign?: string;
  tag?: Tag;
  truncate?: boolean;
  upcase?: boolean;
  margin?: Margin;
}

class Heading extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    color: '#007acc',
    textAlign: 'center',
    tag: 'h1',
    truncate: false,
    upcase: false,
    margin: 'medium',
  };
  public render() {
    const { children, tag, ...rest } = this.props;
    switch (tag) {
    case 'h2':
      return (
      <H2 tag={tag} {...rest}>
        {children}
      </H2>
      );
    case 'h3':
      return (
      <H3 tag={tag} {...rest}>
        {children}
      </H3>
      );
    case 'h4':
      return (
      <H4 tag={tag} {...rest}>
        {children}
      </H4>
      );
    case 'h5':
      return (
      <H5 tag={tag} {...rest}>
        {children}
      </H5>
      );
    default:
      return (
        <H1 tag={tag} {...rest}>
          {children}
        </H1>
      );
    }
  }
}

export default Heading;
