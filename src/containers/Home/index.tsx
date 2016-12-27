import * as React from 'react';
import { Header, Image, Hero, Button } from 'components';
import { Docs } from 'containers';
const Container = require('./styles').Container;

class Home extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <section>
          <Hero>
            <Image src="https://raygun.com/blog/wp-content/uploads/2016/07/Callums-post-on-Typescript.png" />
            <Header color="#007acc">
              Scalable React TS Boilerplate
            </Header>
            <Button color="#c05b4d">
              Get Started
            </Button>
          </Hero>
        </section>
        <Docs />
      </Container>
    );
  }
}

export default Home;
