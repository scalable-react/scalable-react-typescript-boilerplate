import gql from 'graphql-tag';

export default gql`
  query Posts {
    post {
      title
      image
      content
      tags {
        name
      }
    }
  }
`;
