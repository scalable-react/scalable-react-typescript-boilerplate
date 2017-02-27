import * as React from 'react';
import {
  Wrapper,
  CommentWrapper,
  PicWrapper,
  Pic,
  CommentText,
  Footer,
} from './styles';

interface CommentProps extends React.Props<typeof Comment> {
  author?: string;
  body?: string;
  picUrl?: string;
}

class Comment extends React.Component<CommentProps, undefined> {
  public static defaultProps: CommentProps = {
    picUrl: 'https://github.com/RyanCCollins/cdn/blob/master/misc/missing.png?raw=true',
  };
  public render() {
    return (
      <Wrapper>
        <PicWrapper>
          <Pic picUrl={this.props.picUrl} />
        </PicWrapper>
        <CommentWrapper>
          <CommentText>{this.props.body}</CommentText>
          <Footer>
            {this.props.author} | Aug 24, 2014 @ 2:35 PM
          </Footer>
        </CommentWrapper>
      </Wrapper>
    );
  }
}

export default Comment;
