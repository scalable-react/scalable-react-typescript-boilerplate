import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Notification } from 'ui';
import { 
  withKnobs,
  string,
  color
 } from '@kadira/storybook-addon-knobs';

 const stories = storiesOf('Notification', module);
 stories.addDecorator(withKnobs);

stories
  .addWithInfo(
    'default notification',
    `
      Properties:

      \`message: {string}\`
      
      A node containing a message to show on the notification.

      \`onClose?: {function()}\`

      A callback to handle closing the notification on click.

      \`status?: {'ok' | 'warning' | 'error' | 'none'}\`

      Status of the notification, which determines color of the background box.

      ~~~js
        <Notification
          onClose={this.handleClose}
          status="warning"
          message="All systems failed."
        />
      ~~~
    `, () =>
        <Notification
          onClose={action('Clicked notification onClose')}
          status="warning"
          message="All systems failed."
        />,
    {
      inline: true,
      propTables: false,
      source: false,
    }
  );
