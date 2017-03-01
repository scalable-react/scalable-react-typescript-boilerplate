import * as React from 'react';
import ErrorComponent from './';

export interface ErrorProps extends React.Props<typeof ErrorComponent> {
  message: JSX.Element | string;
  onClose?: Function;
}
