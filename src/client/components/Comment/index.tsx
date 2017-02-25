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

export default function Comment({ body, author }: CommentProps): JSX.Element {
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
