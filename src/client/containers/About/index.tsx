import * as React from 'react';
import {
  Avatar,
  Anchor,
  Article,
  Image,
  Markdown,
  Heading,
  Headline,
} from 'ui';
import {
  Container,
  AboutSection,
  AboutSectionInner,
  StyledHr,
  AvatarContainer,
  Content,
  Card,
  CardFooter,
  Transform,
} from './styles';
import about from './about';
import contributors from './contributors';

class About extends React.Component<undefined, undefined> {
  public render() {
    return (
      <Container>
        <AboutSection id="about-section-1">
          <Headline fontWeight={700}>
            About
            <StyledHr />
          </Headline>
          <AboutSectionInner>
            <Article
              pad="large"
              backgroundColor="#fff"
              margin={{ vertical: 'medium' }}
              boxSize={{ horizontal: 'xxlarge' }}
              content={`${about.aboutContent}`}
            />
          </AboutSectionInner>
        </AboutSection>
        <AboutSection id="about-section-two" padBottom>
          <Headline fontWeight={700}>
            Team Members
            <StyledHr/>
          </Headline>
          <AboutSectionInner>
            {contributors.map((contributor, index) =>
              <Card key={index}>
                <AvatarContainer>
                  <Transform>
                    <Avatar
                      name={contributor.name}
                      src={contributor.avatar}
                    />
                  </Transform>
                  <Content>
                    <Heading textAlign="center">
                      {contributor.name}
                    </Heading>
                    <Markdown content={contributor.bio} />
                  </Content>
                  <CardFooter>
                    <Anchor href={contributor.github}>
                      <Image alt="github logo" src={about.githubLogo} imageSize="small"/>
                    </Anchor>
                  </CardFooter>
                </AvatarContainer>
              </Card>,
            )}
          </AboutSectionInner>
        </AboutSection>
      </Container>
    );
  }
}

export default About;
