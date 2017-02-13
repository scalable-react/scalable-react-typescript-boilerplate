import * as React from 'react';
import { SvgIcon, Anchor } from 'components';
import { Card, CardThumbnail, CardHeading, CardDescription } from './styles';

export default function PostCard(props: {
  content: string;
  id: string;
  image: string;
  title: string;
}) {
  const { content, image, title, id } = props;
  return (
    <Card>
      <CardThumbnail image={image} />
      <CardHeading>
        {title}
      </CardHeading>
      <CardDescription>
        {content}
      </CardDescription>
      <Anchor href={`/blog/${id}`}>
        <SvgIcon>
          <path fill="none" stroke="#000000" stroke-width="2" d="M2,12 L22,12 M13,3 L22,12 L13,21" />
        </SvgIcon>
        Read More
      </Anchor>
    </Card>
  );
};
