import { createSelector } from 'reselect';

export const selectFooBar = () => (state) => state.fooBar;

export const selectIsLoading = createSelector(
  selectFooBar(),
  (fooBar) => fooBar.isLoading,
);

export const selectError = createSelector(
  selectFooBar(),
  (fooBar) => fooBar.error,
);

export const selectData = createSelector(
  selectFooBar(),
  (fooBar) => fooBar.data,
);
