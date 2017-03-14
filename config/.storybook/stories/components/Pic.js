import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Pic } from 'components';
import {
  withKnobs,
  boolean,
  color,
  select,
  text
} from '@kadira/storybook-addon-knobs';


const stories = storiesOf('Pic', module);
stories.addDecorator(withKnobs);

const properties =
  `
  Properties:
  ~~~ts
export interface PicDivProps extends React.Props<HTMLDivElement> {
  url: string;
}
  ~~~
    `;

stories
  .addWithPropsCombinations(
  'Pic options',
  Pic,
  {
    url: ["https://raw.githubusercontent.com/RyanCCollins/cdn/master/misc/github-512.png",
    'https://github.com/RyanCCollins/cdn/blob/master/misc/missing.png?raw=true'],
  },
  {
    header: true,
    inline: true,
    source: true,
    propTables: null,
  }
  )
  .addWithInfo(
  'default Pic',
  properties,
  () => (
    <Pic />
  ),
  {
    header: true,
    inline: true,
    source: true,
    propTables: null,
  }
  );

