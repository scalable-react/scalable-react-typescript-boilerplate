import * as React from 'react';
import ErrorComponent from './';

export type Status = 'none' | 'ok' | 'warning' | 'error';
export interface Props extends React.HTMLProps<typeof ErrorComponent> {
  message: JSX.Element | string;
  status?: Status;
}
