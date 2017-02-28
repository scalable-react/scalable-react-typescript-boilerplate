import reducer from '../reducers';
import * as types from '../constants';
import { actionCreators } from '../actionCreators';
import {initialState} from '../state';

describe('docs reducer', () => {
  it('should return the initial state with default action', () => {
    expect(
      reducer(undefined, actionCreators.defaultAction()),
    ).toEqual(initialState);
  });
  
  it('should handle LOAD_INTIATION', () => {
    expect(
      reducer(initialState, actionCreators.loadInitiation()),
    ).toEqual({
      markdownContent: null,
      error: null,
      isLoading: true,
    });
  });

  it('should handle LOAD_SUCCESS', () => {
    const testData: string = 'test string';
    expect(
      reducer(initialState, actionCreators.loadSuccess(testData)),
    ).toEqual({
      markdownContent: testData,
      error: null,
      isLoading: false,
    });
  });

  it('should handle LOAD_FAILURE', () => {
    const testMessage: string = 'test error message';
    expect(
      reducer(initialState, actionCreators.loadFailure(testMessage)),
    ).toEqual({
      markdownContent: null,
      error: testMessage,
      isLoading: false,
    });
  });

  it('should handle LOAD_CANCEL', () => {
    const testMessage: string = 'test error message';
    expect(
      reducer(initialState, actionCreators.loadCancel()),
    ).toEqual({
      markdownContent: null,
      error: null,
      isLoading: false,
    });
  });

});
