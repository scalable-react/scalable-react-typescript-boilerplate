import { createSelector, Selector } from 'reselect';
import { State } from 'state';
import { State as FeatureState, NavLink } from './state';

const selectFeature = () => (state: State): FeatureState  => state.app;

export const selectIsMobile: Selector<State, boolean> = createSelector(
  selectFeature(),
  (feature) => feature.isMobile,
);

export const selectLogoText: Selector<State, string> = createSelector(
  selectFeature(),
  (feature) => feature.logoText,
);

export const selectNavLinks: Selector<State, NavLink[]> = createSelector(
  selectFeature(),
  (feature) => feature.navLinks,
);
