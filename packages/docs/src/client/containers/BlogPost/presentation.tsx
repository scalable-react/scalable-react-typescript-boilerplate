import * as React from 'react';
import { Post } from 'components';
import { LoadingIndicator, Section, Notification } from 'ui';
import { ErrorType, Post as PostType, OnInput, OnSubmit, OnKeyUp } from './types';
import { ThemeColorMap } from '../../types';

export interface Props {
  onChange: OnInput;
  onSubmit: OnSubmit;
  onKeyUp: OnKeyUp;
  loading: boolean;
  post: PostType;
  error: ErrorType;
  input: string;
  theme: ThemeColorMap;
}
export default class BlogPostPresentation extends React.Component<Props, undefined> {
  public render() {
    const { loading, post, error, theme, ...rest } = this.props;
    return (
      <Section
        alignItems="center"
        flexDirection="column"
        pad={{ vertical: 'large', horizontal: 'small' }}
        full={{ vertical: true }}
        backgroundColor={theme.offwhite}
      >
        {error && <Notification status="error" message={error.message} />}
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
