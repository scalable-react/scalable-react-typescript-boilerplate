export interface Post {
  id: string;
  title: string;
  image: string;
  content: string;
}

export interface BlogProps extends React.Props<any> {
  loading: boolean;
  error?: { message: string };
  posts?: Post[];
}

export interface BlogState {
  showError: boolean;
}
