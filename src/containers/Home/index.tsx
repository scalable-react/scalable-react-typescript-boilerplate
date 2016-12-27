import * as React from 'react';
import { Header, Image } from 'components';
import { Container } from './styles';

class Home extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <Image src="https://raygun.com/blog/wp-content/uploads/2016/07/Callums-post-on-Typescript.png" />
        <Header color="#007acc">
          Scalable React TypeScript
        </Header>
      </Container>
    );
  }
}

export default Home;
