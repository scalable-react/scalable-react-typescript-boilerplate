import * as React from 'react';
import {
  Headline,
  Markdown,
  Image,
  Paragraph,
  Avatar,
  Anchor } from 'components';
const {
  Container,
  AboutSection,
  AboutSectionInner,
  StyledHr,
  AvatarContainer,
  Div,
  Divider,
  Github
} = require('./styles');
const about = require('./about').default;
import contributors from './contributors';

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
            {contributors.map(contributor =>
              <AvatarContainer>
                <Avatar
                  name={contributor.name}
                  avatarUrl={contributor.avatar}
                />
                <Div>
                  <Markdown content={contributor.bio} />
                </Div>
                <Div>
                  <Anchor href={contributor.github}>
                    <Github />
                  </Anchor>
                </Div>
              </AvatarContainer>
            )}
          </AboutSectionInner>
        </AboutSection>
      </Container>
    );
  }
}

export default About;
