import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Toast } from 'ui';
import { 
  withKnobs,
  string,
  color,
  select
} from '@kadira/storybook-addon-knobs';

const statusOptions = {
  none: 'none',
  ok: 'ok',
  warning: 'warning',
  error: 'error',
};

const stories = storiesOf('Toast', module);
stories.addDecorator(withKnobs);

stories
  .addWithInfo(
    'default toast',
    `
      Properties:

      \`message: {string}\`
      
      A node containing a message to show on the notification.

      \`onClose?: {function()}\`

      A callback to handle closing the notification on clicking the closer.

      \`status?: {'ok' | 'warning' | 'error' | 'none'}\`

      Status of the toast, which determines color of the background box.

      ~~~js
        <Toast
          onClick={this.handleClose}
          status="warning"
          message="All systems failed."
        />
      ~~~
    `, () =>
        <Toast
          onClose={action('Clicked notification onClick')}
          status={select('status', statusOptions, 'warning')}
          message="All systems failed."
        />,
    {
      inline: true,
      propTables: false,
      source: false,
    }
  );
