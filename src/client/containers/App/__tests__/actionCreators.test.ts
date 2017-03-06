import reducer from '../reducer';
import * as types from '../constants';
import { actionCreators } from '../actionCreators';
import { initialState } from '../state';

// Action Creator Test as a rule return very little value. Focus on tests that give more value first

describe('App actionCreators', () => {

  it('properly creates SET_MOBILE action with isMobile = true', () => {
    expect(actionCreators.setIsMobile(true),
    ).toEqual({
      type: types.SET_MOBILE,
      isMobile: true,
    });
  });

  it('properly creates SET_MOBILE action with isMobile = false', () => {
    expect(actionCreators.setIsMobile(false),
    ).toEqual({
      type: types.SET_MOBILE,
      isMobile: false,
    });
  });

});
