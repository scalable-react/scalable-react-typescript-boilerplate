import * as React from 'react';
import Component from './styles';
import BoxProps from '../Box/types';
const Markdown = require('react-markdown');
require('github-markdown-css/github-markdown.css');

interface ArticleProps extends BoxProps {
  content?: string;
  children?: JSX.Element;
};

class Article extends React.Component<ArticleProps, undefined> {
  private static renderContent(content) {
    if (!content) {
      return null;
    }
    return (
      <Markdown source={content} />
    );
  }
  public render() {
    const { content, children, ...rest } = this.props;
    return (
      <Component {...rest} className="markdown-body">
        {Article.renderContent(content)}
        {children}
      </Component>
    );
  }
}

export default Article;
