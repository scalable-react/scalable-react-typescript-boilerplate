import * as React from 'react';
import Comment from './';

export interface CommentProps extends React.Props<typeof Comment> {
  body: string;
  author: string;
}
