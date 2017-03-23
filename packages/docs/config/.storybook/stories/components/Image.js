import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Image } from 'ui';
import {
  withKnobs,
  select
} from '@kadira/storybook-addon-knobs';

const sizeOptions = {
  thumb: 'thumb',
  xxsmall: 'xxsmall',
  xsmall: 'xsmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  full: 'full'
};

const srcUrl='https://goo.gl/zm8EZD';

const stories = storiesOf('Image', module);
stories.addDecorator(withKnobs);

stories
  .addWithInfo(
    'Image',
    `
      Properties: 

      \`imageSize: thumb|xxsmall|xsmall|small|medium|large|full\`
      
      Usage:

      ~~~js
        <Image
          imageSize='small'
          alt='alt text'
          src='/src/to/image'
        />
      ~~~
    `,
     () => (
        <Image
          imageSize={select('size', sizeOptions, 'thumb')}
          alt='tree shaking'
          src={srcUrl}
        />
     ),
     {
       inline: true,
       propTables: false,
     }
  );
