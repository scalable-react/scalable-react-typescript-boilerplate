import * as React from 'react';
import { Heading } from 'openui';
import { Props } from './types';
import { Section } from './styles';

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
