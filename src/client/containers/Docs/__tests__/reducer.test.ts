import reducer from '../reducer';
import { actionCreators } from '../actionCreators';
import { initialState } from '../state';

describe('docs reducer', () => {
  it('should return the initial state with default action', () => {
    expect(
      reducer(undefined, actionCreators.defaultAction()),
    ).toEqual(initialState);
  });

  it('should handle LOAD_INTIATION', () => {
    expect(
      reducer(initialState, actionCreators.loadInitiation()).isLoading,
    ).toEqual(true);
  });

  it('should handle LOAD_SUCCESS', () => {
    const testData: string = 'test string';
    expect(
      reducer(initialState, actionCreators.loadSuccess(testData)).markdownContent,
    ).toEqual(testData);
  });

  it('should handle LOAD_FAILURE', () => {
    const testMessage: string = 'test error message';
    expect(
      reducer(initialState, actionCreators.loadFailure(testMessage)).error,
    ).toEqual(testMessage);
  });

  it('should handle LOAD_CANCEL', () => {
    expect(
      reducer(initialState, actionCreators.loadCancel()).isLoading,
    ).toEqual(false);
  });

});
