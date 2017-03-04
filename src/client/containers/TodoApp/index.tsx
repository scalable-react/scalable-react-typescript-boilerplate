import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormControlEventTarget } from '../../types';
import { State } from '../../state';
import actionCreators from './actionCreators';
import Presentation from './presentation';
import { Todo, Input as In, ActionCreatorTypes, ActionTypes, Index } from './types';
import {
  selectTodos,
  selectInput,
} from './selectors';

const mapStateToProps = (state: State): StateProps => ({
  todos: selectTodos(state),
  input: selectInput(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): DispatchProps => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch,
  ),
});

export interface StateProps extends React.Props<TodoApp> {
  todos: Todo[],
  input: In,
}
export interface DispatchProps {
  actions: ActionCreatorTypes;
}
export type Props = DispatchProps & StateProps;
class TodoApp extends React.Component<Props, undefined> {
  constructor() {
    super();
    this.handleAddition = this.handleAddition.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
  }
  private handleAddition(e: React.KeyboardEvent<undefined>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const { input, actions } = this.props;
      actions.addTodo({ text: input });
    }
  }
  private handleInput(e: React.SyntheticEvent<undefined>) {
    e.preventDefault();
    const input = (e.target as FormControlEventTarget).value;
    this.props.actions.input(input);
  }
  private handleDeletion(i: Index) {
    this.props.actions.deleteTodo(i);
  }
  public render() {
    return (
      <Presentation
        todos={this.props.todos}
        input={this.props.input}
        onInput={this.handleInput}
        onAddition={this.handleAddition}
        onDeletion={this.handleDeletion}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoApp);
