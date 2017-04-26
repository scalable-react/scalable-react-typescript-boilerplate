import * as React from 'react';
import Component from './styles';
import ReactMarkdown from 'react-markdown';

export interface Props extends React.Props<typeof Markdown> {
  content: string;
}
export default function Markdown({
  content,
}: Props): JSX.Element {
  if (typeof ReactMarkdown === 'undefined') {
    return (
      <Component className="markdown-body">
        {content}
      </Component>
    );
  }
  return (
    <Component className="markdown-body">
      <ReactMarkdown source={content} />
    </Component>
  );
}
