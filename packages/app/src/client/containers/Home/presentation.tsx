import * as React from 'react';
import { Welcome } from 'components';
import { LoadingIndicator, Toast, Box } from 'openui';
import { Props } from './types';

export default class Presentation extends React.Component<Props, undefined> {
  public render() {
    const {
      isLoading,
      error,
      data,
      actions,
    } = this.props;
    return (
      <Box full alignItems="center" justifyContent="center">
        <LoadingIndicator isLoading={isLoading} />
        {error &&
          <Toast
            status="warning"
            message={error.message}
            onClose={actions.clearError}
          />
        }
        <Welcome data={data} />
      </Box>
    );
  }
}
