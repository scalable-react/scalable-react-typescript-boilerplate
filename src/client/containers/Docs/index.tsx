import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State } from '../../state';
import actionCreators from './actionCreators';
import { selectError, selectIsLoading, selectMarkdownContent } from './selectors';
import Docs, { StateProps, DispatchProps } from './presentation';
import { DocsAction } from './actions';

// tslint:disable-next-line
interface OwnProps  { }; // for props that are not passed down to inner component

const mapStateToProps = (state: State): StateProps => ({
  error: selectError(state),
  markdownContent: selectMarkdownContent(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = (dispatch: Dispatch<DocsAction>): DispatchProps => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch,
  ),
});

const DocsContainer: React.ComponentClass<OwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Docs);

export default DocsContainer;
