import * as React from 'react';
import { Header, Container } from './styles';

class Home extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <Header>Welcome back</Header>
      </Container>
    );
  }
}

export default Home;
