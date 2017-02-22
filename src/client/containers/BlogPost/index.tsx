import * as React from 'react';
import { graphql } from 'react-apollo';
import { LoadingIndicator, Post, Section } from 'components';
import POST_QUERY from './post.graphql';
import COMMENT_MUTATION from './comments.graphql';
import { BlogProps } from './types';

class Blog extends React.Component<BlogProps, any> {
  constructor() {
    super();
    this.handleAddingComment = this.handleAddingComment.bind(this);
    this.handleChangingCommentInput = this.handleChangingCommentInput.bind(this);
    this.handleEnterKeyUp = this.handleEnterKeyUp.bind(this);
    this.state = {
      input: '',
    };
  }
  private handleChangingCommentInput({ target }) {
    this.setState({
      input: target.value,
    });
  }
  private handleAddingComment() {
    const { input } = this.state;
    const author = 'Unknown';
    const { postId } = this.props.params;
    this.props.submitComment({
      body: input,
      author,
      post: postId,
    }).then(() => {
      this.props.refetch();
      alert('Sorry, but this is just a demonstration.  Please don\'t hate us');
      this.setState({
        input: '',
      });
    });
  }
  private handleEnterKeyUp(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleAddingComment();
    }
  }
  public render() {
    const { loading, post, error } = this.props;
    return (
      <Section
        alignItems="center"
        flexDirection="column"
        pad={{ vertical: 'large', horizontal: 'small' }}
        full={{ vertical: true }}
        backgroundColor="#f5f5f5"
      >
        {error && <p>{error.message}</p>}
        <LoadingIndicator isLoading={loading} />
        {post &&
          <Post
            comment={{
              input: this.state.input,
              onChange: this.handleChangingCommentInput,
              onSubmit: this.handleAddingComment,
              onKeyUp: this.handleEnterKeyUp,
            }}
            {...post}
          />
        }
      </Section>
    );
  }
}

const withData = graphql(POST_QUERY, {
  skip: ({ params }) => !params || (params && !params.postId),
  options: ({ params }) => ({
    variables: {
      id: params.postId,
    },
  }),
  props: ({ data: { loading, post, error, refetch } }) => ({
    loading,
    post,
    error,
    refetch,
  }),
});

const withMutation = graphql(COMMENT_MUTATION, {
  props: ({ mutate }) => ({
    submitComment: mutate,
  }),
});

export default withData(withMutation(Blog));
