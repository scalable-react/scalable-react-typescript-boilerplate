import * as React from 'react';
import { Box, Paragraph } from '../';
import { ErrorProps } from './types';

export default function Error({
  message,
  onClose,
}: ErrorProps): JSX.Element {

  // Box extends HtmlProps so onClick will not accept a "Function" type input.
  // Cast the onClose prop to a React.Eventhandler type to allow a function.
  const onCloseCallback = onClose as React.EventHandler<any>;

  return (
    <Box
      backgroundColor="#ff324d"
      boxSize={{ horizontal: 'medium' }}
      pad="small"
      onClick={onCloseCallback}
      alignItems="center"
      selectable
    >
      <Paragraph size="large" color="white">{message}</Paragraph>
    </Box>
  );
};
