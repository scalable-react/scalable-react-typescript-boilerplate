import * as React from 'react';
import { Link } from 'react-router';
import shortenText from './shortenText';
import {
  Icon,
  Card,
  CardFooter,
  CardThumbnail,
  CardHeading,
  CardDescription,
  Anchor,
  CardContents,
} from './styles';
import { PostCardProps } from './types';

export default function PostCard({
  content,
  image,
  title,
  id,
}: PostCardProps): JSX.Element {
  return (
    <Card>
      <CardThumbnail image={image} />
      <CardContents>
        <CardHeading>
          {title}
        </CardHeading>
        <CardDescription>
          {shortenText(content, 150)}
        </CardDescription>
        <CardFooter>
          <Link to={`/blog/posts/${id}`}>
            <Icon>
              <path fill="none" d="M2,12 L22,12 M13,3 L22,12 L13,21" />
            </Icon>
            <Anchor>Read More</Anchor>
          </Link>
        </CardFooter>
      </CardContents>
    </Card>
  );
};
