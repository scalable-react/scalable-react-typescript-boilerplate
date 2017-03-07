import * as React from 'react';
import LoadingIndicator from './';

export interface LoadingIndicatorProps extends React.Props<typeof LoadingIndicator> {
  isLoading: boolean;
}
