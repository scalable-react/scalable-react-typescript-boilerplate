import * as React from 'react';
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
  const url = picUrl || 'https://github.com/RyanCCollins/cdn/blob/master/misc/missing.png?raw=true';
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
