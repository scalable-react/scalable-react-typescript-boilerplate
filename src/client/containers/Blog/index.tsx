import * as React from 'react';
import { graphql } from 'react-apollo';
import { Headline, LoadingIndicator, PostCard } from 'components';
import POST_QUERY from './posts.graphql';
import { BlogLayout, StyledHr } from './styles';

interface IPost {
  id: string;
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

export default withData(Blog);
