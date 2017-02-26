import { createSelector, Selector } from 'reselect';
import { State } from '../../state';
import { State as DocsState } from './types';

const selectDocs = () => (state: State): DocsState  => state.docs;

export const selectError: Selector<State, string> = createSelector(
  selectDocs(),
  (docs) => docs.error,
);

export const selectIsLoading: Selector<State, boolean> = createSelector(
  selectDocs(),
  (docs) => docs.isLoading,
);

export const selectMarkdownContent: Selector<State, string> = createSelector(
  selectDocs(),
  (docs) => docs.markdownContent,
);
