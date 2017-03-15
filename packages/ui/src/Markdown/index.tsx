import * as React from 'react';
import { MarkdownProps } from './types';
import Component from './styles';
import ReactMarkdown from 'react-markdown';
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
