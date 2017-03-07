// Adapted from https://grommet.github.io/docs/spinning
import * as React from 'react';
import { Box } from '../';
import { LoadingIndicatorProps } from './types';
import SvgIcon, { Circle } from './styles';

export default function LoadingIndicator({
  isLoading,
}: LoadingIndicatorProps): JSX.Element {
  if (!isLoading) {
    return null;
  }
  return (
    <Box
      boxSize={{ horizontal: 'small' }}
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
};
