import * as T from '../constants';
import actionCreators from '../actionCreators';

describe('blogPost actionCreators', () => {
  it('should have a type of INPUT', () => {
    const input = 'bar';
    const expected = { type: T.INPUT, input };
    expect(actionCreators.input(input)).toEqual(expected);
  });
});
