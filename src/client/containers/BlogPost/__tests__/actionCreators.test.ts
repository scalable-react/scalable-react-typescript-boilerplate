import reducer from '../reducer';
import * as T from '../constants';
import actionCreators from '../actionCreators';
import { initialState } from '../state';

describe('blogPost actionCreators', () => {
  it('should have a type of INPUT', () => {
    const input = 'bar';
    const expected = { type: T.INPUT, input };
    expect(actionCreators.input(input)).toEqual(expected);
  });
});
