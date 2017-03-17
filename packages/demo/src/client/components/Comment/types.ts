import * as React from 'react';
import Comment from '../';

export interface CommentProps extends React.Props<typeof Comment> {
  author?: string;
  body?: string;
  picUrl?: string;
}
