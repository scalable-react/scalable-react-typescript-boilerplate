import * as React from 'react';
import { Docs, Features } from 'containers';
const { Container, HeroImage } = require('./styles');
import { Header, Image, Hero, Button, Anchor } from 'components';

class Home extends React.Component<any, any> {
  public render() {
    return (
      <Container>
        <section id="hero-section">
          <Hero>
            <HeroImage>
              <Image
                alt="Typescript logo"
                src="https://raygun.com/blog/wp-content/uploads/2016/07/Callums-post-on-Typescript.png"
              />
            </HeroImage>
            <Header color="#007acc">
              Scalable React TS Boilerplate
            </Header>
            <Anchor
              color="#fff"
              href="https://github.com/RyanCCollins/scalable-react-ts-boilerplate"
            >
              <Button color="#c05b4d">
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
