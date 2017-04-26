import Blog from '../';

export interface Post {
  id: string;
  title: string;
  image: string;
  content: string;
}

export interface Props extends React.Props<typeof Blog> {
  loading: boolean;
  error?: { message: string };
  posts?: Post[];
}

export interface State {
  showError: boolean;
}
