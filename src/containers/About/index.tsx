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
            <AvatarContainer>
              <Avatar
                name="Ryan C. Collins"
                avatarUrl='https://avatars0.githubusercontent.com/u/13810084?v=3&s=460'
              />
              <Div>
                <Markdown content={`${about.aboutRyan}`} />
              </Div>
              <Div>
                <Anchor href="http://github.com/RyanCCollins">
                  <Github />
                </Anchor>
              </Div>
            </AvatarContainer>
            
            <AvatarContainer>
              <Avatar
                name="Abhishek Ghosh"
                avatarUrl='https://raw.githubusercontent.com/ghoshabhi/cdn/master/profile_ag.jpg'
              />
              <Div>
                <Markdown content={`${about.aboutAbhi}`} />
              </Div>
              <Div>
                <Anchor href="https://github.com/ghoshabhi">
                  <Github />
                </Anchor>
              </Div>
            </AvatarContainer>
          </AboutSectionInner>
        </AboutSection>
      </Container>
    );
  }
}

export default About;
