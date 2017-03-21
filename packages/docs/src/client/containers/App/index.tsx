import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../../state';
import actionCreators from './actionCreators';
import { selectIsMobile, selectNavLinks, selectLogoText } from './selectors';
import Feature, { StateProps, DispatchProps } from './presentation';
import { FeatureAction } from './actions';

// tslint:disable-next-line
interface OwnProps  { }; // for props that are not passed down to inner component

const mapStateToProps = (state: State): StateProps => ({
  isMobile: selectIsMobile(state),
  navLinks: selectNavLinks(state),
  logoText: selectLogoText(state),
});

const mapDispatchToProps = (dispatch: Dispatch<FeatureAction>): DispatchProps => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch,
  ),
});

const Container: React.ComponentClass<OwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feature);

export default Container;
