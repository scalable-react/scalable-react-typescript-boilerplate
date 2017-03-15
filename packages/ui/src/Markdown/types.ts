import * as React from 'react';
import Markdown from './';

export interface MarkdownProps extends React.Props<typeof Markdown> {
  content: string;
}
