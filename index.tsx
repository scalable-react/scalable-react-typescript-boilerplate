import * as React from 'react';
const Markdown = require('react-markdown');
require('github-markdown-css/github-markdown.css');
const ArticleComponent = require('./styles').ArticleComponent;

interface IProps extends React.Props<Button> {
  content: string,
};

class Button extends React.Component<IProps, any> {
  render() {
    return (
      <ArticleComponent className="markdown-body">
        <Markdown source={this.props.content} />
      </ArticleComponent>
    );
  }
}

export default Button;
