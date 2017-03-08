import * as React from 'react';
import Box from './styles';
import { Paragraph } from '../';
import { Props } from './types';

export default function Error({
  message,
  onClose,
  status,
}: Props): JSX.Element {

  // Box extends HtmlProps so onClick will not accept a "Function" type input.
  // Cast the onClose prop to a React.Eventhandler type to allow a function.
  const onCloseCallback = onClose as React.EventHandler<any>;
  const stat = status || 'none';
  return (
    <Box
      status={stat}
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
