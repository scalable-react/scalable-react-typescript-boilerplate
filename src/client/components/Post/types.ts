interface PostComment {
  body: string;
  author: string;
}

export interface PostProps {
  content: string;
  image: string;
  title: string;
  comments?: PostComment[];
  comment: {
    input: string;
    onSubmit: React.EventHandler<React.MouseEvent<HTMLLIElement>>;
    onChange: React.EventHandler<React.FormEvent<HTMLTextAreaElement>>;
    onKeyUp: React.EventHandler<React.KeyboardEvent<HTMLTextAreaElement>>;
  }
}
