import * as React from 'react';
import { Features } from 'containers';
import { Heading, Section, Hero, Paragraph } from 'components';
const { Container, HeroLogo, HeroLogoRow, HeadingContainer } = require('./styles');
const GetStartedButtonRow = require('./GetStartedButtonRow').default;

class Home extends React.Component<any, any> {
  public render() {
    return (
      <Container>
        <Section
          alignItems="center"
          flexDirection="column"
          full={{ horizontal: true }}
          backgroundColor="#f5f5f5"
        >
          <Hero>
            <HeroLogoRow>
              <HeroLogo>
                TS
              </HeroLogo>
            </HeroLogoRow>
            <HeadingContainer>
              <Heading margin="small" tag="h1" color="#007acc">
                Scalable React TypeScript Boilerplate
              </Heading>
              <Paragraph margin="small" size="large">
                Scaling JavaScript apps has never been easier
              </Paragraph>
            </HeadingContainer>
            <GetStartedButtonRow />
          </Hero>
        </Section>
        <Features />
        <Section backgroundColor="#f3f3f3">
          <GetStartedButtonRow />
        </Section>
      </Container>
    );
  }
}

export default Home;
