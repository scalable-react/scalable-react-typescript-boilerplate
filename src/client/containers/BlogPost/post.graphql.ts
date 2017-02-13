import gql from 'graphql-tag';

export default gql`
  query Post($id: ID!) {
    post(id: $id) {
      id: _id
      title
      image
      content
      comments {
        body
        author
      }
    }
  }
`;
