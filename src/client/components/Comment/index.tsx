import * as React from 'react';
import defaultImage from './default';
import { CommentProps } from './types';
import {
  Wrapper,
  CommentWrapper,
  PicWrapper,
  Pic,
  CommentText,
  Footer,
} from './styles';

export default function Comment({
  author,
  body,
  picUrl,
}: CommentProps): JSX.Element {
  const url = picUrl || defaultImage;
  return (
    <Wrapper>
      <PicWrapper>
        <Pic url={url} />
      </PicWrapper>
      <CommentWrapper>
        <CommentText>{body}</CommentText>
        <Footer>
          {author} | Aug 24, 2014 @ 2:35 PM
        </Footer>
      </CommentWrapper>
    </Wrapper>
  );
}
