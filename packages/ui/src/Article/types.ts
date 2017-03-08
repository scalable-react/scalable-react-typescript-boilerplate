import BoxProps from '../Box/types';

export interface ArticleProps extends BoxProps {
  content?: string;
  children?: JSX.Element;
}
