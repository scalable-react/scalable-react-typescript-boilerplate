import * as React from 'react';
import { MarkdownProps } from './types';
import Component from './styles';
const ReactMarkdown = require('react-markdown');
require('github-markdown-css/github-markdown.css');

export default function Markdown({
  content,
}: MarkdownProps): JSX.Element {
  return (
    <Component className="markdown-body">
      <ReactMarkdown source={content} />
    </Component>
  );
}
