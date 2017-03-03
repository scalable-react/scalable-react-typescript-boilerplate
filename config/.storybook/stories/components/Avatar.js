import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Avatar } from 'components';

const contributor = {
  name: 'Ryan Collins',
  src: 'https://avatars0.githubusercontent.com/u/13810084?v=3&s=460',
};
storiesOf('Avatar', module)
  .add('default avatar', () =>
      <Avatar />
  )
  .add('thumb avatar', () =>
    <Avatar
      {...contributor}
      size="thumb"
    />
  ).add('small avatar', () =>
    <Avatar
      {...contributor}
      size="small"
    />
  ).add('medium avatar', () =>
    <Avatar
      {...contributor}
      size="medium"
    />
  ).add('large avatar', () =>
    <Avatar
      {...contributor}
      size="large"
    />
  );