import * as React from 'react';
import { LoadingIndicator, Post, Section, Error } from 'components';
import { ErrorType, Post as PostType, OnInput, OnSubmit, OnKeyUp } from './types';

interface Props {
  onChange: OnInput,
  onSubmit: OnSubmit,
  onKeyUp: OnKeyUp,
  loading: boolean,
  post: PostType,
  error: ErrorType,
  input: string,
}
export default class BlogPostPresentation extends React.Component<Props, any> {
  public render() {
    const { loading, post, error, ...rest } = this.props;
    return (
      <Section
        alignItems="center"
        flexDirection="column"
        pad={{ vertical: 'large', horizontal: 'small' }}
        full={{ vertical: true }}
        backgroundColor="#f5f5f5"
      >
        {error && <Error message={error.message} />}
        <LoadingIndicator isLoading={loading} />
        {post &&
          <Post
            comment={{...rest}}
            {...post}
          />
        }
      </Section>
    );
  }
}
