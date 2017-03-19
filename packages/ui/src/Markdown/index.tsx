import * as React from 'react';
import Component from './styles';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';

export interface Props extends React.Props<typeof Markdown> {
  content: string;
}
export default function Markdown({
  content,
}: Props): JSX.Element {
  return (
    <Component className="markdown-body">
      <ReactMarkdown source={content} />
    </Component>
  );
}
