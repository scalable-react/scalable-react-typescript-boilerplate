import * as React from 'react';
import { Features } from 'containers';
import { Heading, Hero } from 'components';
const { Container, Section, HeroLogo, HeroLogoRow, HeadingContainer } = require('./styles');
const GetStartedButtonRow = require('./GetStartedButtonRow').default;

class Home extends React.Component<any, any> {
  public render() {
    return (
      <Container>
        <section id="hero-section">
          <Hero>
            <HeroLogoRow>
              <HeroLogo>
                TS
              </HeroLogo>
            </HeroLogoRow>
            <HeadingContainer>
              <Heading color="#007acc">
                Scalable React TS Boilerplate
              </Heading>
            </HeadingContainer>
            <GetStartedButtonRow />
          </Hero>
        </section>
        <Features />
        <Section id="get-started" backgroundColor="#f3f3f3">
          <GetStartedButtonRow />
        </Section>
      </Container>
    );
  }
}

export default Home;
