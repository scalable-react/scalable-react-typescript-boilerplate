import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State as GlobalState } from 'root/state';
import { Action, ActionMap, ErrorType } from './types';
import actionCreators from './actionCreators';
import * as selectors from './selectors';
import Presentation from './presentation';

type MapStateToProps = (state: GlobalState) => StateProps;
const mapStateToProps: MapStateToProps = (state) => ({
  isLoading: selectors.selectIsLoading(state),
  error: selectors.selectError(state),
  data: selectors.selectData(state),
});

type MapDispatchToProps = (dispatch: Dispatch<Action>) => DispatchProps;
const mapDispatchToProps: MapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch,
  ),
});

export interface DispatchProps {
  actions: ActionMap;
}

export interface StateProps {
  isLoading: boolean;
  error?: ErrorType;
  data?: string;
}

export type Props = StateProps & DispatchProps;

class Home extends React.Component<Props, undefined> {
  public componentWillMount() {
    if (!this.props.data) {
      this.props.actions.loadInitiation();
    }
  }
  public render() {
    return (
      <Presentation {...this.props} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
