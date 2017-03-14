import * as React from 'react';
import { AddCommentProps } from './types';
import {
  Wrapper,
  CommentWrapper,
  PicWrapper,
  Pic,
  TextArea,
  Footer,
  Actions,
  Action,
  ActionButton,
} from './styles';

export default function AddComment({
  onSubmit,
  input,
  onChange,
  onKeyUp,
}: AddCommentProps): JSX.Element {
  return (
    <Wrapper>
      <PicWrapper>
        <Pic />
      </PicWrapper>
      <CommentWrapper>
        <form>
          <TextArea
            onKeyUp={onKeyUp}
            value={input}
            onChange={onChange}
            name="comment-input"
            id="comment-input"
            cols={30}
            rows={3}
            placeholder="Add comment..."
          />
        </form>
        <Footer>
          <Actions>
            <Action onClick={onSubmit}>
              <ActionButton>Submit</ActionButton>
            </Action>
          </Actions>
        </Footer>
      </CommentWrapper>
    </Wrapper>
  );
};
