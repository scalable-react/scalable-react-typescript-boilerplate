import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { LoadingIndicator } from 'components';

storiesOf('Loading Indicator', module)
  .add('is loading', () =>
    <LoadingIndicator
      isLoading
    />
  );