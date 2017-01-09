import * as React from 'react';
import { Headline, Markdown, Image, Paragraph } from 'components';
const { Container, AboutSection, AboutSectionInner, StyledHr } = require('./styles');
const about = require('./about').default;

class About extends React.Component<any, any> {
  public render() {
    return (
      <Container>
        <AboutSection>
          <Headline textAlign="left">
            About
            <StyledHr />
          </Headline>
          <AboutSectionInner>
            <Paragraph
              fontSize={36}
              color={'black'}
            >
              <Markdown content={`${about.aboutContent}`} />
            </Paragraph>
          </AboutSectionInner>
        </AboutSection>
        <AboutSection>
          <Headline>
            Team Members
            <StyledHr/>
          </Headline>
        </AboutSection>
      </Container>
    );
  }
}

export default About;
