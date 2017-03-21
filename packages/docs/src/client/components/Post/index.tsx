import * as React from 'react';
import { Markdown, Image, Headline, Article, Box } from 'ui';
import { Comment, AddComment } from 'components';
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
      pad="medium"
      backgroundColor="#fff"
      alignItems="center"
      margin={{ vertical: 'medium' }}
      boxSize={{ horizontal: 'xxlarge' }}
    >
      <Box pad="medium" alignItems="center">
        <Image alt={title} imageSize="large" src={image} />
        <Headline>
          {title}
        </Headline>
        <Markdown content={content} />
        <h1>Comments</h1>
        <AddComment
          {...comment}
        />
        {comments && comments.map((item, i) =>
          <Comment key={i} {...item} />,
        )}
      </Box>
    </Article>
  );
};
