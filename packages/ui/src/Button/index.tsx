import * as React from 'react';
import { HeroButton, ButtonComponent} from './styles';
import { Size } from './types';

// This is so that the onClick handler is accepted without type interferance
export interface Props extends React.HTMLProps<HTMLButtonElement & Button> {
  color?: string;
  backgroundColor?: string;
  fontSize?: Size;
  isHero?: boolean;
  borderColor?: string;
}

class Button extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    borderColor: '#732419',
    fontSize: 'medium',
    isHero: false,
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
          fontSize={this.props.fontSize}
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
        fontSize={this.props.fontSize}
      >
        {this.props.children}
      </ButtonComponent>
    );
  }
}

export default Button;
