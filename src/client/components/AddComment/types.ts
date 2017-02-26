import * as React from 'react';
import AddComment from './';

export interface AddCommentProps extends React.Props<typeof AddComment> {
  input: string;
  onSubmit: Function;
  onChange: Function;
  onKeyUp: Function;
}
