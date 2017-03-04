import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Anchor } from 'components';

storiesOf('Anchor', module)
  .add('default anchor', () =>
    <Anchor
      path="/docs"
    >
      Default Anchor
    </Anchor>
  ).add('cornflower blue anchor', () =>
    <Anchor
      color="cornflowerblue"
      path="/docs"
    >
      Cornflower Blue Anchor
    </Anchor>
  );