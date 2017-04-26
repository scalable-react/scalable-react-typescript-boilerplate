import * as React from 'react';
import { Heading, Paragraph } from 'openui';
import { Props } from './types';
import { Section } from './styles';

export default class Presentation extends React.Component<Props, undefined> {
  public render() {
    return (
      <Section>
        <Heading>
          {this.props.title}
        </Heading>
        <Paragraph>
          You can find me in /src/client/features/landing
        </Paragraph>
      </Section>
    );
  }
}
