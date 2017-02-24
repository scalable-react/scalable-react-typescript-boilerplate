// Adapted from https://grommet.github.io/docs/spinning
import * as React from 'react';
import SvgIcon, { Circle } from './styles';
import { Box } from 'components';

interface LoadingIndicatorProps extends React.Props<LoadingIndicator> {
  isLoading: boolean;
};

// tslint:disable
class LoadingIndicator extends React.Component<LoadingIndicatorProps, any> {
  public render() {
    if (this.props.isLoading) {
      return (
        <Box
          size={{ horizontal: 'small' }}
          pad="medium"
          alignItems="center"
          justifyContent="center"
        >
          <SvgIcon viewBox="0 0 48 48">
            <Circle
              cx="24"
              cy="24"
              r="21"
              stroke="#007acc"
              strokeWidth="6"
              fill="none"
            />
          </SvgIcon>
        </Box>
      );
    }
    return null;
  }
}

export default LoadingIndicator;
