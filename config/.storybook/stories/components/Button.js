import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Button } from 'ui';
import {
  withKnobs,
  boolean,
  color,
  select,
  text
} from '@kadira/storybook-addon-knobs';


const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
  .addWithInfo(
    'default Button',
    `
      Properties:

      \`size: xsmall|small|medium|large|xlarge \`
      
      Button size

      \` borderColor: {string}\`
      
      Border color for the button

      \`backgroundColor: {string} \`
      
      Background color for the button

      \`Usage:\` 
      ~~~js
        <Button 
          onClick={this.props.handleClick} 
        >
          Default Button
        </Button>
      ~~~
    `,
     () => (
      <Button
        onClick={action('clicked the default button')}
        borderColor={color('borderColor','#c05b4d')}
        backgroundColor={color('backgroundColor','#c05b4d')}
      >
        {text('Label','Default Button')}
      </Button>
     ),
     {
       inline: true,
       propTables: false,
     }
  )
  .addWithInfo( 
    'hero Button',
    `
      Properties:

      \`size: xsmall|small|medium|large|xlarge \`
      
      Button size

      \`isHero: true|false\`

      Whether the button is a Hero
      
      \` borderColor: {string}\`
      
      Border color for the button

      \`backgroundColor: {string} \`
      
      Background color for the button
      
      ~~~js
        <Button 
          isHero,
          onClick={this.props.handleClick} 
        >
          Hero Button
        </Button>
      ~~~
    `,
     () => (
      <Button
        onClick={action('clicked the hero button')}
        style={{ margin: 10 }}
        size="xlarge"
        isHero={boolean('isHero','true')}
        backgroundColor={color('backgroundColor','#c05b4d')}
        borderColor={color('borderColor','#732419')}
      >
        {text('Label','Hero Button')}
      </Button>
     ),
     {
       inline: true,
       propTables: false,
     }
  );
