import * as React from 'react';
import { Props } from './types';
import { Heading, Section } from './styles';

export default class Presentation extends React.Component<Props, undefined> {
  public render() {
    return (
      <Section>
        <Heading>
          {this.props.title}
        </Heading>
      </Section>
    );
  }
}
