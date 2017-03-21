import reducer from '../reducer';
import { actionCreators } from '../actionCreators';
import { initialState } from '../state';

describe('app reducer', () => {
  it('should return the initial state with default action', () => {
    expect(
      reducer(undefined, actionCreators.defaultAction()),
    ).toEqual(initialState);
  });

  it('should handle SET_ISMOBILE with true', () => {
    expect(
      reducer(initialState, actionCreators.setIsMobile(true)).isMobile,
    ).toEqual(true);
  });

  it('should handle SET_ISMOBILE with false', () => {
    expect(
      reducer(initialState, actionCreators.setIsMobile(false)).isMobile,
    ).toEqual(false);
  });

});
