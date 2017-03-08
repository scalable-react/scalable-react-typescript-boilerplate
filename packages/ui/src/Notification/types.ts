import * as React from 'react';
import ErrorComponent from './';

export type Status = 'none' | 'ok' | 'warning' | 'error';
export interface Props extends React.Props<typeof ErrorComponent> {
  message: JSX.Element | string;
  onClose?: Function;
  status?: Status;
}
