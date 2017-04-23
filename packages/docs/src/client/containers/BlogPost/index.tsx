import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormControlEventTarget } from '../../types';
import BlogPresentation from './presentation';
import { ThemeColorMap } from '../../types';
import { Props, ActionCreatorTypes, ActionTypes, Input, ErrorType, Post, SubmitComment } from './types';
import { State } from '../../state';
import { selectInput } from './selectors';
import actionCreators from './actionCreators';
import withApollo from './apollo';
import { withTheme } from 'styled-components';

type MapStateToProps = (state: State) => StateProps;
const mapStateToProps: MapStateToProps = (state) => ({
  input: selectInput(state),
});

type MapDispatch = (dispatch: Dispatch<ActionTypes>) => DispatchProps;
const mapDispatchToProps: MapDispatch = (dispatch) => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch,
  ),
});

export interface Props {
  loading: boolean;
  error?: ErrorType;
  post?: Post;
  theme: ThemeColorMap;
  submitComment?: SubmitComment;
  refetch: () => void;
  params: {
    postId: String;
  };
}

export interface StateProps {
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
    const variables = {
      post: postId as string,
      author,
      body: input,
    };
    this.props.submitComment({ variables }).then(() => {
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

const ComponentWithData = withApollo(BlogPost);
const ComponentWithTheme = withTheme(ComponentWithData as typeof BlogPost);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComponentWithTheme);
