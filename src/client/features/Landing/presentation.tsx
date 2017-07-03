import * as React from 'react';
import { Heading, Paragraph } from 'openui';
import { Props } from './types';
import { Section } from './styles';

export default function LandingPresentation({ title }: Props) {
  return (
    <Section>
      <Heading>
        {title}
      </Heading>
      <Paragraph>
        You can find me in `/src/client/features/landing`
      </Paragraph>
    </Section>
  );
}
