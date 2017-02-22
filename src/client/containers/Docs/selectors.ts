import { createSelector } from 'reselect';
import { InitialState } from '../../reducers';

const selectDocs = () => (state: InitialState) => state.docs;

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
