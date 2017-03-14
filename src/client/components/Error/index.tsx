import * as React from 'react';
import { Box, Paragraph } from 'components';

export interface ErrorProps {
  message: JSX.Element | string;
  onClick?: React.EventHandler<any>;
}

export default function Error({
  message,
  onClick,
}: ErrorProps): JSX.Element {
  return (
    <Box
      backgroundColor="#ff324d"
      boxSize={{ horizontal: 'medium' }}
      pad="small"
      onClick={onClick}
      alignItems="center"
      selectable
    >
      <Paragraph size="large" color="white">{message}</Paragraph>
    </Box>
  );
};
