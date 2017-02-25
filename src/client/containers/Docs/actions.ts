import * as types from './constants';
const url = 'https://raw.githubusercontent.com/RyanCCollins/scalable-react-ts-boilerplate/master/README.md';
import { ErrorType, Action, Data } from './types';
import { Dispatch } from 'redux';

declare var fetch: any;

export const loadInitiation = (): Action<any> => ({
  type: types.LOAD_INTIATION,
});

export const loadSuccess = (data: Data): Action<{ data: Data }> => ({
  type: types.LOAD_SUCCESS,
  payload: {
    data,
  },
});

export const loadFailure = (error: ErrorType): Action<{ error: ErrorType }> => ({
  type: types.LOAD_FAILURE,
  payload: {
    error,
  },
});

export const loadMarkdown = () => (dispatch: Dispatch<any>) => {
  dispatch(loadInitiation());
  setTimeout(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        dispatch(loadSuccess(text));
      })
      .catch((err) => {
        dispatch(loadFailure(err));
      });
  }, 1000);
};
