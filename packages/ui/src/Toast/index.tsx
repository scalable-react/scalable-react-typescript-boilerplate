import * as React from 'react';
import Box from '../Box';
import Component, { Button } from './styles';
import BoxProps from '../Box/types';
import { Status } from './types';

export interface Props extends BoxProps {
  message?: JSX.Element;
  children?: JSX.Element;
  onClose?: () => void;
  status?: Status;
}

interface State {
  isVisible: boolean;
  isUnmounting: boolean;
}

export default class Toast extends React.Component<Props, State> {
  public static defaultProps = {
    status: 'none' as Status,
  };
  constructor() {
    super();
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      isVisible: true,
      isUnmounting: false,
    };
  }
  public componentDidMount() {
    setTimeout(() => {
      this.handleClose();
    }, 5000);
  }
  private handleClose() {
    this.setState({
      isUnmounting: true,
    });
    setTimeout(() => {
      if (this.props.onClose) {
        this.props.onClose();
      }
      this.setState({
        isUnmounting: false,
        isVisible: false,
      });
    }, 1000);
  }
  public render() {
    const { isVisible } = this.state;
    const { message, children, status } = this.props;
    if (!isVisible) {
      return null;
    }
    return (
      <Component status={status} {...this.state}>
        <Box
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          boxSize={60}
          pad="medium"
          style={{ width: '100vw' }}
        >
          <Box style={{ flexGrow: 2 }}>
            {message && message}
            {children && children}
          </Box>
          <Box alignItems="center" justifyContent="center">
            <Button onClick={this.handleClose}>
              ✕
            </Button>
          </Box>
        </Box>
      </Component>
    );
  }
}
