import * as React from 'react';
import { Markdown, Image, Headline, Comment, AddComment } from 'components';
import { ImageSize } from 'components/Image';
import { Article, Content } from './styles';
import { PostProps } from './types';

export default function Post({
  content,
  title,
  image,
  comments,
  comment,
}: PostProps): JSX.Element {
  return (
    <Article
      pad="large"
      margin={{ vertical: 'medium' }}
      size={{ horizontal: 'xxlarge' }}
    >
      <Image alt={title} size={ImageSize.large} src={image} />
      <Headline>
        {title}
      </Headline>
      <Content>
        <Markdown content={content} />
      </Content>
      <h1>Comments</h1>
      <AddComment
        {...comment}
      />
      {comments && comments.map((item, i) =>
        <Comment key={i} {...item} />,
      )}
    </Article>
  );
};
