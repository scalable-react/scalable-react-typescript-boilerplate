import * as React from 'react';
const ButtonComponent = require('./styles').ButtonComponent;

enum ButtonSize {
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
};

class Button extends React.Component<IProps, any> {
  public static defaultProps: IProps = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    size: ButtonSize.medium,
  };
  public render() {
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
