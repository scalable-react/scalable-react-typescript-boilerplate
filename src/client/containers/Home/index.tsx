import * as React from 'react';
import HomePresentation from './presentation';
import { Features } from 'containers';

class Home extends React.Component<undefined, undefined> {
  public render() {
    return (
      <HomePresentation>
        <Features />
      </HomePresentation>
    );
  }
}

export default Home;
