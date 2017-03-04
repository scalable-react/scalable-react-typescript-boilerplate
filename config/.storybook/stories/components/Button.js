import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Button } from 'components';
import { ButtonSize } from 'components/Button';
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
      This is a default button with a \`onClick\` handler. 
      
      Usage: 

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
      backgroundColor={color('backgroundColor','#c05b4d')}
      >
        {text('Label','Default button')}
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

      \`isHero: true|false\`
      
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
        size={ButtonSize.xlarge}
        isHero={boolean('isHero','true')}
        backgroundColor={color('backgroundColor','#c05b4d')}
        borderColor="#732419"
      >
        {text('Label','Hero Button')}
      </Button>
     ),
     {
       inline: true,
       propTables: false,
     }
  );
