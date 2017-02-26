import * as React from 'react';
import { Box, Paragraph } from 'components';
import { ErrorProps } from './types';

export default function Error({
  message,
  onClose,
}: ErrorProps): JSX.Element {
  return (
    <Box
      backgroundColor="#ff324d"
      boxSize={{ horizontal: 'medium' }}
      pad="small"
      onClick={onClose}
      alignItems="center"
    >
      <Paragraph size="large" color="white">{message}</Paragraph>
    </Box>
  );
};
