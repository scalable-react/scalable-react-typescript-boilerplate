import * as React from 'react';
import { graphql } from 'react-apollo';
import { Headline, LoadingIndicator, PostCard, Section, Box } from 'components';
import POST_QUERY from './posts.graphql';
import { StyledHr } from './styles';
import { BlogProps } from './types';

class Blog extends React.Component<BlogProps, any> {
  public render() {
    const { loading, posts, error } = this.props;
    return (
      <Box
        alignItems="center"
        flexDirection="column"
        pad={{ vertical: 'medium', horizontal: 'small' }}
        full={{ vertical: true }}
        backgroundColor="#f5f5f5"
      >
        <Headline fontWeight={700}>
          Blog
          <StyledHr />
        </Headline>
        {error &&
          <Box
            backgroundColor="#ff324d"
            boxSize={{ horizontal: 'medium' }}
            pad="small"
            alignItems="center"
          >
            <p style={{ color: 'white' }}>{error.message}</p>
          </Box>
        }
        <LoadingIndicator isLoading={loading} />
        <Section
          flexWrap
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          boxSize={{ horizontal: 'full' }}
        >
          {posts && posts.map((item, i) =>
            <Box key={i} pad="medium">
              <PostCard
                {...item}
              />
            </Box>,
          )}
        </Section>
      </Box>
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
