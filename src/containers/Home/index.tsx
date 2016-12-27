import * as React from 'react';
import { Header, Image, Hero, Button } from 'components';
import { Container } from './styles';

class Home extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <Hero>
          <Image src="https://raygun.com/blog/wp-content/uploads/2016/07/Callums-post-on-Typescript.png" />
          <Header color="#007acc">
            Scalable React TypeScript
          </Header>
          <Button color="#c05b4d">
            Get Started
          </Button>
        </Hero>
      </Container>
    );
  }
}

export default Home;
