import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Avatar } from 'ui';
import { 
  withKnobs, 
  text, 
  select 
} from '@kadira/storybook-addon-knobs';

const contributor = {
  name: 'Ryan Collins',
  src: 'https://avatars0.githubusercontent.com/u/13810084?v=3&s=460',
};

const sizeOptions = {
  thumb: 'thumb',
  small: 'small',
  medium: 'medium',
  large: 'large',
}

const stories = storiesOf('Avatar', module);
stories.addDecorator(withKnobs);

stories
  .addWithInfo(
    'default avatar',
    `
      Default Avatar
    `,
     () => (
      <Avatar />
    ),
    {
      inline: true,
      propTables: false,
    }
  )
  .addWithInfo(
    'with size prop',
    `
      Properties:

      \`size: thumb | small | medium | large \` 

      You can try out the different prop values in the \`knobs\` section below!
      
      \`Usage:\`
      ~~~js
        <Avatar 
          size='small'
          name='John Doe'
          src='/src/to/avatar' 
        />
      ~~~
    `,
    () => (
      <div>
        <Avatar
          name={text('name',contributor.name)}
          src={text('src',contributor.src)}
          size={select('size', sizeOptions ,'medium')}
        />
      </div>
    ),
    {
      inline: true,
      propTables: false,
    }
  );
