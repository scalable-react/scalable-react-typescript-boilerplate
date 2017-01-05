import * as React from 'react';
import { Docs, Features } from 'containers';
import { ImageSize } from 'components/Image';
import { ButtonSize } from 'components/Button';
import { Header, Image, Hero, Button, Anchor } from 'components';
const { Container, HeroImage, HeadingContainer } = require('./styles');

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
        <Docs />
      </Container>
    );
  }
}

export default Home;
