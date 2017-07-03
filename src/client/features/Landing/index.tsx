import * as React from 'react';
import Presentation from './presentation';

export interface Props {
  title: string;
}

class Landing extends React.Component<Props, undefined> {
  public render() {
    return (
      <Presentation title="Welcome" {...this.props} />
    );
  }
}

export default Landing;
