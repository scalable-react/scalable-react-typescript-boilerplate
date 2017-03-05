import { createSelector, Selector } from 'reselect';
import { State } from 'state';
import { State as FeatureState } from './state';

const selectFeature = () => (state: State): FeatureState  => state.docs;

export const selectError: Selector<State, string> = createSelector(
  selectFeature(),
  (feature) => feature.error,
);

export const selectIsLoading: Selector<State, boolean> = createSelector(
  selectFeature(),
  (feature) => feature.isLoading,
);

export const selectMarkdownContent: Selector<State, string> = createSelector(
  selectFeature(),
  (feature) => feature.markdownContent,
);
