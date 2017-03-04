import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Button } from 'components';
import { ButtonSize } from 'components/Button';

storiesOf('Button', module)
  .add('default button', () =>
    <Button
      onClick={action('clicked the default button')}
      backgroundColor="#c05b4d"
      borderColor="#732419"
    >
      Default button
    </Button>
  )
  .add('hero button', () =>
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
  );