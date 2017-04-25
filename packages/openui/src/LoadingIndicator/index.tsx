// Adapted from https://grommet.github.io/docs/spinning
import * as React from 'react';
import { Box } from '../';
import SvgIcon, { Circle } from './styles';

export interface Props extends React.Props<typeof LoadingIndicator> {
  isLoading: boolean;
}
export default function LoadingIndicator({
  isLoading,
}: Props): JSX.Element {
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
