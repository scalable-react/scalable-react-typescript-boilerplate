import * as React from 'react';
import { HeroDiv } from './styles';

interface HeroProps extends React.Props<Hero> {
  color?: string;
}

class Hero extends React.Component<HeroProps, undefined> {
  public static defaultProps: HeroProps = {
    color: '#2d2d2d',
  };
  public render() {
    return (
      <HeroDiv color={this.props.color}>
        {this.props.children}
      </HeroDiv>
    );
  }
}

export default Hero;
