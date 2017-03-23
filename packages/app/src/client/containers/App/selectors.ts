import { createSelector, Selector } from 'reselect';
import { State as GlobalState } from 'state';
import { State } from './state';

const selectFeature = () => (state: GlobalState): State  => state.app;

export type SelectIsMobile = Selector<GlobalState, boolean>;
export const selectIsMobile: SelectIsMobile = createSelector(
  selectFeature(),
  (feature) => feature.isMobile,
);
