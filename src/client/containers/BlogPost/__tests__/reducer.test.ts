import reducer from '../reducer';
import actionCreators from '../actionCreators';
import { initialState } from '../state';

describe('blogPost reducer', () => {
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
