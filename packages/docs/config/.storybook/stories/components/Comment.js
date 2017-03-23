import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Comment } from 'components';
import {
  withKnobs,
  boolean,
  color,
  select,
  text
} from '@kadira/storybook-addon-knobs';


const stories = storiesOf('Comment', module);
stories.addDecorator(withKnobs);

const properties =
  `
  Properties:
  ~~~ts
  export interface CommentProps extends React.Props<typeof Comment> {
    author?: string;
    body?: string;
    picUrl?: string;
  }
  ~~~
    `;

stories
  .addWithPropsCombinations(
  'Comment options',
  Comment,
  {
    author: ["author", "", null],
    body: ["This is the body of a comment"],
  },
  {
    header: true,
    inline: true,
    source: true,
    propTables: null,
  }
  )
  .addWithPropsCombinations(
  'Comment combinations',
  Comment,
  {
    author: ["author", ""],
    body: ["body", ""],
    picUrl: []
  },
  {
    CombinationRenderer: ({ Component, props, options }) => (
      <Comment {...props} />
    )
  }
  )
  .addWithPropsCombinations(
  'Rendering just a component without any wrappers',
  'button',
  {
    disabled: [false, true],
    onClick: [action('clicked')],
    children: ['hello world', <b>some other elements</b>]
  },
  {
    CombinationRenderer: ({ Component, props, options }) => (
      <Component {...props} />
    )
  }
  )
  .addWithInfo(
  'default Comment',
  properties,
  () => (
    <Comment />
  ),
  {
    header: true,
    inline: true,
    source: true,
    propTables: null,
  }
  );

