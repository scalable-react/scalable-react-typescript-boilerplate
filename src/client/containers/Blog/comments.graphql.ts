import gql from 'graphql-tag';

export default gql`
  mutation CreateComment($post: ID!, $body: String, $author: String) {
    createComment(data:{ post: $post, body: $body, author: $author })
  }
`;
