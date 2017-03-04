import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormControlEventTarget } from '../../types';
import BlogPresentation from './presentation';
import { Props, ActionCreatorTypes, ActionTypes, Input } from './types';
import { State } from '../../state';
import withApollo from './apollo';
import { selectInput } from './selectors';
import actionCreators from './actionCreators';

const mapStateToProps = (state: State): StateProps => ({
  input: selectInput(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): DispatchProps => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch,
  ),
});

export interface StateProps extends React.Props<BlogPost> {
  input: Input,
}

export interface DispatchProps {
  actions: ActionCreatorTypes;
}
export type PropTypes = StateProps & DispatchProps & Props;
class BlogPost extends React.Component<PropTypes, undefined> {
  constructor() {
    super();
    this.handleAddingComment = this.handleAddingComment.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleEnterKeyUp = this.handleEnterKeyUp.bind(this);
  }
  private handleInput(e: React.SyntheticEvent<undefined>) {
    e.preventDefault();
    const input = (e.target as FormControlEventTarget).value;
    this.props.actions.input(input);
  }
  private handleAddingComment() {
    const { input } = this.props;
    const author = 'Unknown';
    const { postId } = this.props.params;
    this.props.submitComment({
      body: input,
      author,
      post: postId,
    }).then(() => {
      this.props.refetch();
      this.props.actions.input('');
    });
  }
  private handleEnterKeyUp(e: React.KeyboardEvent<undefined>) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleAddingComment();
    }
  }
  public render() {
    return (
      <BlogPresentation
        onChange={this.handleInput}
        onSubmit={this.handleAddingComment}
        onKeyUp={this.handleEnterKeyUp}
        {...this.props}
      />
    );
  }
}

const BlogWithApollo = withApollo(BlogPost);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlogWithApollo);
