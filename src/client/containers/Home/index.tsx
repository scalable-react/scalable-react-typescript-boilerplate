import * as React from 'react';
import { Features } from 'containers';
import { ImageSize } from 'components/Image';
import { Header, Image, Hero } from 'components';
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
              <Header color="#007acc">
                Scalable React TS Boilerplate
              </Header>
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
