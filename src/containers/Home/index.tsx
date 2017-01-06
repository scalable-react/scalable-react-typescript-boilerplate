import * as React from 'react';
import { Features } from 'containers';
import { ImageSize } from 'components/Image';
import { ButtonSize } from 'components/Button';
import { Header, Image, Hero, Button, Anchor } from 'components';
const { Container, Section, HeroImage, HeadingContainer, GetStartedButtons } = require('./styles');

class Home extends React.Component<any, any> {
  public render() {
    return (
      <Container>
        <section id="hero-section">
          <Hero>
            <HeroImage>
              <Image
                size={ImageSize.xxsmall}
                alt="Typescript logo"
                src="https://raygun.com/blog/wp-content/uploads/2016/07/Callums-post-on-Typescript.png"
              />
            </HeroImage>
            <HeadingContainer>
              <Header color="#007acc">
                Scalable React TS Boilerplate
              </Header>
            </HeadingContainer>
            <Anchor
              color="#fff"
              href="https://github.com/RyanCCollins/scalable-react-ts-boilerplate"
            >
              <Button
                size={ButtonSize.xlarge}
                isHero
                backgroundColor="#c05b4d"
                borderColor="#732419"
              >
                Get Started
              </Button>
            </Anchor>
          </Hero>
        </section>
        <Features />
        <Section id="get-started" backgroundColor="#f3f3f3">
          <GetStartedButtons>
            <Anchor
              color="#fff"
              href="/docs"
            >
              <Button
                style={{ margin: 10 }}
                size={ButtonSize.xlarge}
                isHero
                backgroundColor="#c05b4d"
                borderColor="#732419"
              >
                Read the docs
              </Button>
            </Anchor>
            <Anchor
              color="#fff"
              href="https://github.com/RyanCCollins/scalable-react-ts-boilerplate"
            >
              <Button
                style={{ margin: 10 }}
                size={ButtonSize.xlarge}
                isHero
                backgroundColor="#c05b4d"
                borderColor="#732419"
              >
                View the code
              </Button>
            </Anchor>
          </GetStartedButtons>
        </Section>
      </Container>
    );
  }
}

export default Home;
