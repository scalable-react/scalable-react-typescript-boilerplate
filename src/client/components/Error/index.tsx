import * as React from 'react';
import { Box, Paragraph } from 'components';
import { ErrorProps } from './types';

export default function Error({
  message,
  onClose,
}: ErrorProps): JSX.Element {
  const onCloseCallback = onClose as React.EventHandler<any>;
  return (
    <Box
      backgroundColor="#ff324d"
      boxSize={{ horizontal: 'medium' }}
      pad="small"
      onClick={onCloseCallback}
      alignItems="center"
    >
      <Paragraph size="large" color="white">{message}</Paragraph>
    </Box>
  );
};
