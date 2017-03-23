import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { LoadingIndicator } from 'ui';
import {
  withKnobs,
  boolean
} from '@kadira/storybook-addon-knobs';

const stories = storiesOf('Loading Indicator', module);
stories.addDecorator(withKnobs);

stories
  .addWithInfo(
    'is loading',
    `
      Properties:

      \`isLoading: true|false\`
    `,
     () =>
      <LoadingIndicator
        isLoading={boolean('isLoading','true')}
      />,
    {
      inline: true,
      propTables: false,
    }
  );
