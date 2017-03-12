import reducer from '../reducer';
import actionCreators from '../actionCreators';
import { initialState } from '../state';

describe('todo app reducer', () => {
  it('should handle reducer for ADD_TODO', () => {
    const todos = [
      {
        text: 'bar',
      },
    ];
    const todo = { text: 'foo' };
    const stateBefore = {
      ...initialState,
      todos,
    };
    const stateAfter = {
      ...initialState,
      todos: [
        ...todos,
        todo,
      ],
    };
    expect(
      reducer(stateBefore, actionCreators.addTodo(todo)),
    ).toEqual(stateAfter);
  });
  it('should handle reducer for DELETE_TODO', () => {
    const todos = [
      {
        text: 'bar',
      },
    ];
    const index = 0;
    const stateBefore = {
      ...initialState,
      todos,
    };
    const stateAfter = {
      ...initialState,
      todos: [],
    };
    expect(
      reducer(stateBefore, actionCreators.deleteTodo(index)),
    ).toEqual(stateAfter);
  });
  it('should handle reducer for INPUT', () => {
    const input = 'foo';
    const stateBefore = initialState;
    const stateAfter = {
      ...initialState,
      input,
    };
    expect(
      reducer(stateBefore, actionCreators.input(input)),
    ).toEqual(stateAfter);
  });
});
