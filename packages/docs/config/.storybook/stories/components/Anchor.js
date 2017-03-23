import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Anchor } from 'ui';
import { 
  withKnobs,
  string,
  color
 } from '@kadira/storybook-addon-knobs';

 const stories = storiesOf('Anchor', module);
 stories.addDecorator(withKnobs);

stories
  .addWithInfo(
    'default anchor',
    `
      Properties:

      \`path: {string} \`

        Navigation path
      
      \`label: {string}\`

        Label seen on the Anchor component
      
      \`onClick: {function ()}\`

        onClick handler for the Anchor.
      
      Usage:

      ~~~js
        <Anchor
          onClick={this.handleClick}
          color='cornflowerblue'
          path='/about'
        />
      ~~~
    `,
     () =>
      <Anchor
        onClick={action('clicked the anchor component')}
        path="/docs"
      >
        Default Anchor
      </Anchor>
    ,
    {
      inline: true,
      propTables: false,
      source: false,
    }
  )
  .addWithInfo(
    'cornflower blue anchor',
    `
      Properties: 

      All the properties from the default \`<Anchor />\` component are available 
      
      additionally you can also pass in a \`"color"\` prop: 
      
        \`color: {string}\` 
      
      Usage:

      ~~~js
        <Anchor
          color='cornflowerblue'
          path='/about'
        />
      ~~~
    `,
     () =>
      <Anchor
        color={color('color','cornflowerblue')}
        path="/docs"
      >
        Cornflower Blue Anchor
      </Anchor>
    ,
    {
      inline: true,
      propTables: false,
      source: false,
    }
  );
