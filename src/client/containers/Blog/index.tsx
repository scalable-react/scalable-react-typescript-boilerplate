import * as React from 'react';
import { graphql } from 'react-apollo';
import { Headline, LoadingIndicator, Post, PostCard } from 'components';
import POST_QUERY from './posts.graphql';
import COMMENT_MUTATION from './comments.graphql';
import { BlogLayout, StyledHr } from './styles';

interface IPostComments {
  body: string;
  author: string;
}

interface IPost {
  id: string;
  tags: Array<{ name: string }>;
  title: string;
  image: string;
  content: string;
  comments: IPostComments[];
}

interface IBlogProps extends React.Props<any> {
  loading: boolean;
  error?: { message: string };
  posts?: IPost[];
  submitComment?: Function;
};

type IBlogPropTypes = IBlogProps;

class Blog extends React.Component<IBlogPropTypes, any> {
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
  private handleAddingComment(_, i) {
    const { input } = this.state;
    const author = 'Unknown';
    const post = this.props.posts[i];
    const { id } = post;
    this.props.submitComment({
      input,
      author,
      post: id,
    }).then(() => {
      this.setState({
        input: '',
      });
    });
  }
  private handleEnterKeyUp(e, i) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleAddingComment(e, i);
    }
  }
  public render() {
    const { loading, posts, error } = this.props;
    return (
      <BlogLayout>
        <Headline>
          Blog
          <StyledHr />
        </Headline>
        {error && <p>{error.message}</p>}
        <LoadingIndicator isLoading={loading} />
        {posts && posts.map((item, i) =>
          <PostCard
            key={i}
            {...item}
          />,
        )}
          {/*<Post
            comment={{
              input: this.state.input,
              onChange: this.handleChangingCommentInput,
              onSubmit: this.handleAddingComment,
              onKeyUp: this.handleEnterKeyUp,
            }}
            key={i}
            {...item}
          />,*/}
      </BlogLayout>
    );
  }
}

const withData = graphql(POST_QUERY, {
  props: ({ data: { loading, posts, error } }) => ({
    loading,
    posts,
    error,
  }),
});

const withMutation = graphql(COMMENT_MUTATION, {
  props: ({ mutate }) => ({
    submitComment: ({ input, author, post }) =>
      mutate({
        variables: { input, author, post },
        optimisticResponse: {
          __typename: 'Mutation',
          submitComment: {
            __typename: 'Comment',
            id: null,
            author,
            post,
            input,
            createdAt: +new Date(),
          },
        },
        updateQueries: {
          Posts: (prev, { mutationResult }) => {
            const newComment = mutationResult.data.submitComment;
            return {
              ...prev,
              newComment,
            };
          },
        },
      }),
  }),
});

export default withData(
  withMutation(Blog),
);
