import * as React from 'react';
import AddComment from './';

export interface AddCommentProps extends React.Props<typeof AddComment> {
  input: string;
  onSubmit: React.EventHandler<React.MouseEvent<HTMLLIElement>>;
  onChange: React.EventHandler<React.FormEvent<HTMLTextAreaElement>>;
  onKeyUp: React.EventHandler<React.KeyboardEvent<HTMLTextAreaElement>>;
}
