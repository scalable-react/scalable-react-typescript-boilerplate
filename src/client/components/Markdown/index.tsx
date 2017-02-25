import * as React from 'react';
const ReactMarkdown = require('react-markdown');
require('github-markdown-css/github-markdown.css');
const Box = require('./styles').Box;

interface MarkdownProps extends React.Props<Markdown> {
  content: string;
}

class Markdown extends React.Component<MarkdownProps, undefined> {
  public render() {
    return (
      <Box className="markdown-body">
        <ReactMarkdown source={this.props.content} />
      </Box>
    );
  }
}

export default Markdown;
