import * as React from 'react';
import actionCreators from './actionCreators';
import { selectError, selectIsLoading, selectMarkdownContent } from './selectors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Docs, { StateProps, DispatchProps } from './presentation';

// tslint:disable-next-line
interface OwnProps  { }; // for props that are not passed down to inner component

const mapStateToProps = (state): StateProps => ({
  error: selectError(state),
  markdownContent: selectMarkdownContent(state),
  isLoading: selectIsLoading(state),
});

const mapDispatchToProps = (dispatch): DispatchProps => ({
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
