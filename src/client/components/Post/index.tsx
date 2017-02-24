import * as React from 'react';
import { Markdown, Image, Headline, Comment, AddComment } from 'components';
import { ImageSize } from 'components/Image';
import { Article, Content } from './styles';

interface PostComment {
  body: string;
  author: string;
}

export default function Post(props: {
  content: string;
  image: string;
  title: string;
  comments?: PostComment[];
  comment: {
    onSubmit: Function;
    onChange: Function;
    input: string;
    onKeyUp: Function;
  }
}) {
  const { content, title, image, comments, comment } = props;
  return (
    <Article>
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
