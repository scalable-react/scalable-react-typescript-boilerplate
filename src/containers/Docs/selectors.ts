import { createSelector } from 'reselect';
import { IInitialState } from '../../reducers';

const selectDocs = () => (state: IInitialState) => state.docs;

export const selectError = createSelector(
  selectDocs(),
  (docs) => docs.error
);

export const selectIsLoading = createSelector(
  selectDocs(),
  (docs) => docs.isLoading
);

export const selectMarkdownContent = createSelector(
  selectDocs(),
  (docs) => docs.markdownContent
);
