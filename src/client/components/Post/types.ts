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
    onSubmit: Function;
    onChange: Function;
    input: string;
    onKeyUp: Function;
  }
}
