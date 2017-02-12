import * as React from 'react';
import { graphql } from 'react-apollo';
import { Headline, LoadingIndicator, Post } from 'components';
import POST_QUERY from './posts.graphql';
import { BlogLayout, StyledHr } from './styles';

interface IPost {
  tags: Array<{ name: string }>;
  title: string;
  image: string;
  content: string;
}

interface IBlogProps extends React.Props<any> {
  loading: boolean;
  error?: { message: string };
  posts?: IPost[];
};

type IBlogPropTypes = IBlogProps;

class Blog extends React.Component<IBlogPropTypes, any> {
  public render() {
    const { loading, posts, error } = this.props;
    return (
      <BlogLayout>
        <Headline>
          Posts
        </Headline>
        <StyledHr />
        {error && <p>{error}</p>}
        <LoadingIndicator isLoading={loading} />
        {posts && posts.map((item, i) =>
          <Post key={i} {...item} />,
        )}
      </BlogLayout>
    );
  }
}

const withData = graphql(POST_QUERY, {
  props: ({ data: { loading, post, error } }) => ({
    loading,
    posts: post,
    error,
  }),
});

export default withData(Blog);
