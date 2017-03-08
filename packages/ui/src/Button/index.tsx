import * as React from 'react';
const { HeroButton, ButtonComponent} = require('./styles');
import { Size } from './types';

export interface Props extends React.Props<Button> {
  color?: string;
  backgroundColor?: string;
  onClick?: (x: any) => any;
  size?: Size;
  isHero?: boolean;
  borderColor?: string;
  style?: any;
}

class Button extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    borderColor: '#732419',
    size: 'medium',
    isHero: false,
    style: {},
  };
  public render() {
    if (this.props.isHero) {
      return (
        <HeroButton
          style={this.props.style}
          borderColor={this.props.borderColor}
          onClick={this.props.onClick}
          color={this.props.color}
          backgroundColor={this.props.backgroundColor}
          size={this.props.size}
        >
          {this.props.children}
        </HeroButton>
      );
    }
    return (
      <ButtonComponent
        onClick={this.props.onClick}
        color={this.props.color}
        backgroundColor={this.props.backgroundColor}
        size={this.props.size}
      >
        {this.props.children}
      </ButtonComponent>
    );
  }
}

export default Button;
