import * as React from 'react';
import { Markdown, Image, Headline } from 'components';
import { ImageSize } from 'components/Image';
import { Article, Content } from './styles';

export default function Post(props: {
  content: string;
  image: string;
  title: string;
}) {
  const { content, title, image } = props;
  return (
    <Article>
      <Image alt={title} size={ImageSize.large} src={image} />
      <Headline>
        {title}
      </Headline>
      <Content>
        <Markdown content={content} />
      </Content>
    </Article>
  );
};
