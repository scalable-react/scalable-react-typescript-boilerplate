import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State } from 'root/state';
import actionCreators from './actionCreators';
import { selectIsMobile } from './selectors';
import Feature, { StateProps, DispatchProps } from './presentation';
import { Action } from './actions';

const mapStateToProps = (state: State): StateProps => ({
  isMobile: selectIsMobile(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch,
  ),
});

const Container: React.ComponentClass<{}> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feature);

export default Container;
