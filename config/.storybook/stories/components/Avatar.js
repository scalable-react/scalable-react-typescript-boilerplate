import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Avatar } from 'components';
import { 
  withKnobs, 
  text, boolean, number 
} from '@kadira/storybook-addon-knobs';

const contributor = {
  name: 'Ryan Collins',
  src: 'https://avatars0.githubusercontent.com/u/13810084?v=3&s=460',
};

const stories = storiesOf('Avatar stories', module);
stories.addDecorator(withKnobs);

stories
  .addWithInfo(
    'with src Avatar',
    `
      Some documentation!
    `,
     () => (
    <Avatar
      name={text('Name', 'Ryan Collins')}
      src={text('URL','https://avatars0.githubusercontent.com/u/13810084?v=3&s=460')}
    />
    ),
    {
      inline: true,
    }
  );
  /*.addWithInfo(
    'Default Avatar',
    `
      This is the basic usage of \`<Avatar /> \` component. It gets default props: \`name: Contributor \`
      and a default url for avatar image.
      ~~~js
        <Avatar />
      ~~~
    `,
    () => (
      <div>
        <Avatar />
      </div>
    ),
    {
      inline: true,
    }
  )
  .addWithInfo(
    'size="thumb"',
    `
      \`Usage:\`
      ~~~js
        <Avatar 
          size="thumb"
          name='John Doe'
          src='/src/to/avatar' 
        />
      ~~~
    `,
    () => (
      <div>
        <Avatar 
          {...contributor}
          size="thumb" 
        />
      </div>
    ),
    {
      inline: true,
    }
  ).addWithInfo(
    'size="small"',
    `
      \`Usage:\`
      ~~~js
        <Avatar 
          size="small"
          name='John Doe'
          src='/src/to/avatar' 
        />
      ~~~
    `,
    () => (
      <div>
        <Avatar 
          {...contributor}
          size="small" 
        />
      </div>
    ),
    {
      inline: true,
    }
  ).addWithInfo(
    'size="medium"',
    `
      \`Usage:\`
      ~~~js
        <Avatar 
          size="medium"
          name='John Doe'
          src='/src/to/avatar' 
        />
      ~~~
    `,
    () => (
      <div>
        <Avatar 
          {...contributor}
          size="medium" 
        />
      </div>
    ),
    {
      inline: true,
    }
  ).addWithInfo(
    'size="large"',
    `
      \`Usage:\`
      ~~~js
        <Avatar 
          size="large"
          name='John Doe'
          src='/src/to/avatar' 
        />
      ~~~
    `,
    () => (
      <div>
        <Avatar 
          {...contributor}
          size="large" 
        />
      </div>
    ),
    {
      inline: true,
    }
  );*/
