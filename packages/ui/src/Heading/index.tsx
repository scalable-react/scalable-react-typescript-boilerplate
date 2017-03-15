import * as React from 'react';
import { Margin } from '../Paragraph/types';
import styled from 'styled-components';
import { HeaderStyle } from './styles';

export type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface HeadingProps {
  color?: string;
  textAlign?: string;
  tag?: Tag;
  truncate?: boolean;
  upcase?: boolean;
  margin?: Margin;
}

class Heading extends React.Component<HeadingProps, undefined> {
  public static defaultProps: HeadingProps = {
    color: '#007acc',
    textAlign: 'center',
    tag: 'h1',
    truncate: false,
    upcase: false,
    margin: 'medium',
  };
  public render() {
    const { children, tag, ...rest } = this.props;
    const Tag = `${tag}`;
    return (
      <Tag {...rest}>
        {children}
      </Tag>
    );
  }
}

export default styled(Heading)`
  ${HeaderStyle}
`;
