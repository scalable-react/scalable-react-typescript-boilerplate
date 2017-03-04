import * as React from 'react';
import Component from './styles';
import { ArticleProps } from './types';
const Markdown = require('react-markdown');
require('github-markdown-css/github-markdown.css');

export default function Article({
  content,
  children,
  ...rest,
}: ArticleProps) {
  return (
    <Component {...rest} className="markdown-body">
      {content && typeof content === 'string' &&
        <Markdown source={content} />
      }
      {children}
    </Component>
  );
}
