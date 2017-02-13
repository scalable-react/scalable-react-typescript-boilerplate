import * as React from 'react';
import {
  Wrapper,
  CommentWrapper,
  PicWrapper,
  Pic,
  CommentText,
  Footer,
} from './styles';

export default function Comment(props: {
  body: string;
  author: string;
}) {
  const { body, author } = props;
  return (
    <Wrapper>
      <PicWrapper>
        <Pic />
      </PicWrapper>
      <CommentWrapper>
        <CommentText>{body}</CommentText>
        <Footer>
          Aug 24, 2014 @ 2:35 PM
        </Footer>
      </CommentWrapper>
    </Wrapper>
  );
};
