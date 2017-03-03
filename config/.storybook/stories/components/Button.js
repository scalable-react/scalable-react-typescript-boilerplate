import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Button } from 'components';
import { ButtonSize } from 'components/Button';

storiesOf('Button', module)
  .addWithInfo(
    'default Button',
    `
      This is a default button with a \`onClick\` handler. Usage: 
      ~~~js
        <Button onClick={this.props.handleClick} />
      ~~~
    `,
     () => (
      <Button
      onClick={action('clicked the default button')}
      backgroundColor="#c05b4d"
      borderColor="#732419"
      >
        Default button
      </Button>
     ),
     {
       inline: true,
       propTable: [Button]
     }
  )
  .addWithInfo(
    'hero button',
    `
      This is a button with \`isHero\` prop set to \`true\`. Usage: 
      ~~~js
        <Button 
          isHero,
          onClick={this.props.handleClick} 
        />
      ~~~
    `,
     () => (
      <Button
        onClick={action('clicked the hero button')}
        style={{ margin: 10 }}
        size={ButtonSize.xlarge}
        isHero
        backgroundColor="#c05b4d"
        borderColor="#732419"
      >
        Hero Button
      </Button>
     ),
     {
       inline: true,
     }
  );
