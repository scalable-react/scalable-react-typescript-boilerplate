import * as React from 'react';
import { HeroDiv } from './styles';
import { HeroProps } from './types';

class Hero extends React.Component<HeroProps, undefined> {
  public render() {
    const { backgroundColor, children } = this.props;
    return (
      <HeroDiv backgroundColor={backgroundColor}>
        {children}
      </HeroDiv>
    );
  }
}

export default Hero;
