import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Notification } from 'ui';
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

const stories = storiesOf('Notification', module);
stories.addDecorator(withKnobs);

stories
  .addWithInfo(
    'default notification',
    `
      Properties:

      \`message: {string}\`
      
      A node containing a message to show on the notification.

      \`onClick?: {function()}\`

      A callback to handle closing the notification on click.

      \`status?: {'ok' | 'warning' | 'error' | 'none'}\`

      Status of the notification, which determines color of the background box.

      ~~~js
        <Notification
          onClick={this.handleClose}
          status="warning"
          message="All systems failed."
        />
      ~~~
    `, () =>
        <Notification
          onClick={action('Clicked notification onClick')}
          status={select('status', statusOptions, 'warning')}
          message="All systems failed."
        />,
    {
      inline: true,
      propTables: false,
      source: false,
    }
  );
