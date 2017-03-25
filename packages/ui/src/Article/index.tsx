import * as React from 'react';
import { Markdown } from '../';
import Component from './styles';
import BoxProps from '../Box/types';

export interface Props extends BoxProps {
  content?: string;
  children?: JSX.Element;
}
export default function Article({
  content,
  children,
  ...rest,
}: Props) {
  return (
    <Component {...rest} className="markdown-body">
      {content && typeof content === 'string' &&
        <Markdown content={content} />
      }
      {children}
    </Component>
  );
}
