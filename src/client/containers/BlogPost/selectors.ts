import { createSelector, Selector } from 'reselect';
import { State } from '../../state';
import { State as BlogPostState } from './types';

const selectBlogPost = () => (state: State): BlogPostState  => state.blogPost;

export const selectInput: Selector<State, string> = createSelector(
  selectBlogPost(),
  (blogPost) => blogPost.input,
);
