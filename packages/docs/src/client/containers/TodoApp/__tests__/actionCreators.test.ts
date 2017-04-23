import * as T from '../constants';
import actionCreators from '../actionCreators';

describe('todoApp actionCreators', () => {
  it('should have a type of ADD_TODO', () => {
    const todo = { text: 'foo' };
    const expected = { type: T.ADD_TODO, todo };
    expect(actionCreators.addTodo(todo)).toEqual(expected);
  });
  it('should have a type of INPUT', () => {
    const input = 'bar';
    const expected = { type: T.INPUT, input };
    expect(actionCreators.input(input)).toEqual(expected);
  });
  it('should have a type of DELETE_TODO', () => {
    const index = 1;
    const expected = { type: T.DELETE_TODO, index };
    expect(actionCreators.deleteTodo(index)).toEqual(expected);
  });
});
