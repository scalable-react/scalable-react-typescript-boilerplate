import * as React from 'react';
const Markdown = require('react-markdown');
require('github-markdown-css/github-markdown.css');
const ArticleComponent = require('./styles').ArticleComponent;

interface ArticleProps extends React.Props<Article> {
  content: string;
};

class Article extends React.Component<ArticleProps, any> {
  public render() {
    return (
      <ArticleComponent className="markdown-body">
        <Markdown source={this.props.content} />
      </ArticleComponent>
    );
  }
}

export default Article;
