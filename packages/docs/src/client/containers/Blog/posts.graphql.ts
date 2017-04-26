import gql from 'graphql-tag';

export default gql`
  query Posts {
    posts {
      id: _id
      title
      image
      content
    }
  }
`;
