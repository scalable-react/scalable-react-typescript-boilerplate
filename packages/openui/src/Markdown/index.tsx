import * as React from 'react';
import ReactMarkdown from 'react-remarkable';
import Component from './styles';

export interface Props extends React.Props<typeof Markdown> {
  content: string;
}
export default function Markdown({
  content,
}: Props): JSX.Element {
  return (
    <Component className="markdown-body">
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </Component>
  );
}
