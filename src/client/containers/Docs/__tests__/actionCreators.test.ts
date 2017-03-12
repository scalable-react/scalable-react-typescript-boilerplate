import * as types from '../constants';
import { actionCreators } from '../actionCreators';

// Action Creator Test as a rule return very little value. Focus on tests that give more value first

describe('docs actionCreators', () => {

  it('properly creates LOAD_INTIATION action', () => {
    expect(actionCreators.loadInitiation(),
    ).toEqual({
      type: types.LOAD_INITIATION,
    });
  });

  it('properly creates LOAD_SUCCESS action', () => {
    const testData: string = 'test string';
    expect(actionCreators.loadSuccess(testData),
    ).toEqual({
      type: types.LOAD_SUCCESS,
      payload: testData,
    });
  });

  it('properly creates LOAD_INTIATION action', () => {
    expect(actionCreators.loadCancel(),
    ).toEqual({
      type: types.LOAD_CANCEL,
    });
  });

  it('properly creates LOAD_SUCCESS action', () => {
    const testMessage: string = 'test error Message';
    expect(actionCreators.loadFailure(testMessage),
    ).toEqual({
      type: types.LOAD_FAILURE,
      error: testMessage,
    });

    it('properly creates LOAD_SUCCESS action', () => {
      expect(actionCreators.clearError(),
      ).toEqual({
        type: types.CLEAR_ERROR,
      });
    });

  });

});
