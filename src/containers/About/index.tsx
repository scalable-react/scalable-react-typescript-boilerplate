import * as React from 'react';
import {
  Headline,
  Markdown,
  Image,
  Paragraph,
  Avatar } from 'components';
const {
  Container,
  AboutSection,
  AboutSectionInner,
  StyledHr,
  AvatarContainer } = require('./styles');
const about = require('./about').default;

class About extends React.Component<any, any> {
  public render() {
    return (
      <Container>
        <AboutSection id="about-section" background="#f3f3f3">
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
          <AboutSectionInner>
            <Avatar avatarUrl='https://avatars0.githubusercontent.com/u/13810084?v=3&s=460' />
            <Avatar avatarUrl='https://avatars1.githubusercontent.com/u/19292575?v=3&s=460' />
          </AboutSectionInner>
        </AboutSection>
      </Container>
    );
  }
}

export default About;
