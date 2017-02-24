import * as React from 'react';
const HeroDiv = require('./styles').HeroDiv;

interface HeroProps extends React.Props<Hero> {
  color?: string;
};

class Hero extends React.Component<HeroProps, any> {
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
