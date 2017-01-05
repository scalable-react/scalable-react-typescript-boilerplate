import * as React from 'react';
const { HeroButton, ButtonComponent} = require('./styles');

export enum ButtonSize {
  xsmall = 10,
  small = 12,
  medium = 16,
  large = 20,
  xlarge = 24,
}

interface IProps extends React.Props<Button> {
  color?: string;
  backgroundColor?: string;
  onClick?: (x: any) => any;
  size?: ButtonSize;
  isHero?: boolean;
  borderColor?: string;
};

class Button extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    borderColor: '#732419',
    size: ButtonSize.medium,
    isHero: false,
  };
  public render() {
    if (this.props.isHero) {
      return (
        <HeroButton
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
