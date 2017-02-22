import * as types from './constants';
const url = 'https://raw.githubusercontent.com/RyanCCollins/scalable-react-ts-boilerplate/master/README.md';

declare var fetch: any;

interface Action<P> {
  type: string;
  payload?: P;
}

export const loadInitiation = (): Action<any> => ({
  type: types.LOAD_INTIATION,
});

export const loadSuccess = (data: any): Action<any> => ({
  type: types.LOAD_SUCCESS,
  payload: {
    data,
  },
});

export const loadFailure = (error: { message: string }): Action<any> => ({
  type: types.LOAD_FAILURE,
  payload: {
    error,
  },
});

export const loadMarkdown = () => (dispatch: Function) => {
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
