export interface PostComment {
  body: string;
  author: string;
}

export interface Post {
  id: string;
  tags: Array<{ name: string }>;
  title: string;
  image: string;
  content: string;
  comments: PostComment[];
}

export interface BlogProps extends React.Props<any> {
  loading: boolean;
  error?: { message: string };
  post?: Post;
  submitComment?: Function;
  refetch: Function;
  params: {
    postId: string;
  };
};
