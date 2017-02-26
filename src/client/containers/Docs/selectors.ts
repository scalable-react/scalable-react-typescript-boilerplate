import { createSelector } from 'reselect';
import { State } from '../../state';

const selectDocs = () => (state: State) => state.docs;

export const selectError = createSelector(
  selectDocs(),
  (docs) => docs.error,
);

export const selectIsLoading = createSelector(
  selectDocs(),
  (docs) => docs.isLoading,
);

export const selectMarkdownContent = createSelector(
  selectDocs(),
  (docs) => docs.markdownContent,
);
