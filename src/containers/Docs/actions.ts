import * as types from './constants';

const url = 'https://raw.githubusercontent.com/RyanCCollins/scalable-react-ts-boilerplate/master/README.md';

interface IAction<P> {
  type: string;
  payload?: P;
}

export const loadInitiation = (): IAction => ({
  type: types.LOAD_INTIATION,
});

export const loadSuccess = (data: any): IAction => ({
  type: types.LOAD_SUCCESS,
  payload: {
    data,
  },
});

export const loadFailure = (error: string): IAction => ({
  type: types.LOAD_FAILURE,
  payload: {
    error,
  },
});

export const loadMarkdown = () => (dispatch) => {
  dispatch(loadInitiation());
  fetch(url)
    .then((res) => res.text())
    .then((text) => {
      dispatch(loadSuccess(text));
    })
    .catch((err) => {
      dispatch(loadFailure(err.message));
    });
};
