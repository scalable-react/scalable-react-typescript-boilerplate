import { graphql } from 'react-apollo';
import BlogPost from './';
import PostQuery from './postQuery.graphql';
import CommentMutation from './commentMutation.graphql';

export const withData = graphql(PostQuery, {
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

export const withMutation = graphql(CommentMutation, {
  props: ({ mutate }) => ({
    submitComment: mutate,
  }),
});

const withApollo = (component: typeof BlogPost): typeof BlogPost =>
  withData(withMutation(component));

export default withApollo;
