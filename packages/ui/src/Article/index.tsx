import * as React from 'react';
import { Markdown } from 'ui';
import Component from './styles';
import { ArticleProps } from './types';

export default function Article({
  content,
  children,
  ...rest,
}: ArticleProps) {
  return (
    <Component {...rest} className="markdown-body">
      {content && typeof content === 'string' &&
        <Markdown content={content} />
      }
      {children}
    </Component>
  );
}
