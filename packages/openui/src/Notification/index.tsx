import * as React from 'react';
import Box from './styles';
import { Paragraph } from '../';
import { Status } from './types';

export interface Props extends React.HTMLProps<typeof Notification> {
  message: JSX.Element | string;
  status?: Status;
}
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
