import * as React from 'react';
import { Markdown, Image, Headline } from 'components';
import { ImageSize } from 'components/Image';
import { Article } from './styles';

export default function Post(props: {
  content: string;
  image: string;
  title: string;
}) {
  const { content, title, image } = props;
  return (
    <Article>
      <Headline>
        {title}
      </Headline>
      <Image alt={title} size={ImageSize.xlarge} src={image} />
      <Markdown content={content} />
    </Article>
  );
};
