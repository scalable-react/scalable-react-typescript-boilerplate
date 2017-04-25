import * as React from 'react';
import { Anchor } from '../';
import ButtonComponent from './styles';
import { Size } from './types';

// This is so that the onClick handler is accepted without type interferance
export interface Props extends React.HTMLProps<HTMLButtonElement & typeof Button> {
  color?: string;
  backgroundColor?: string;
  fontSize?: Size;
  borderColor?: string;
  label?: string;
  path?: string;
}

export class Button extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    borderColor: '#732419',
    fontSize: 'medium',
  };
  public render() {
    const { children, label, path } = this.props;
    const button = (
      <ButtonComponent
        onClick={this.props.onClick}
      >
        {children || label || ''}
      </ButtonComponent>
    );
    if (path && path !== '') {
      return (
        <Anchor path={path} plain>
          {button}
        </Anchor>
      );
    }
    return button;
  }
}

export default Button;
