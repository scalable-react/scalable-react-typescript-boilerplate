import * as React from 'react';
import Box from './styles';
import { Paragraph } from '../';
import { Props } from './types';

export default function Notification({
  message,
  status,
  ...rest,
}: Props): JSX.Element {
  const stat = status || 'none';
  return (
    <Box
      status={stat}
      boxSize={{ horizontal: 'medium' }}
      pad="small"
      alignItems="center"
      selectable
      {...rest}
    >
      <Paragraph paragraphSize="large" color="white">{message}</Paragraph>
    </Box>
  );
};
