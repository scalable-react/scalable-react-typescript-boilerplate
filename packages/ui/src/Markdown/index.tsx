import * as React from 'react';
import { MarkdownProps } from './types';
import Component from './styles';

// will need to track this down more later but require works -- import gets undefined
var ReactMarkdown = require('react-markdown');

import 'github-markdown-css/github-markdown.css';

export default function Markdown({
  content,
}: MarkdownProps): JSX.Element {
  return (
    <Component className="markdown-body">
      <ReactMarkdown source={content} />
    </Component>
  );
}
