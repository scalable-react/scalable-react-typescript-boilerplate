import * as types from './constants';

interface IAction<P> {
  type: string;
  payload?: P;
};

export interface IDocsState {
  markdownContent?: string;
  error?: string;
  isLoading: boolean;
};

export const initialState: IDocsState = {
  markdownContent: null,
  error: null,
  isLoading: false,
};

const docsReducer = (state: IAppState = initialState, action: IAction<any>): IDocsState => {
  switch (action.type) {
    case types.LOAD_INTIATION:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case types.LOAD_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        markdownContent: action.payload.data,
      });
    case types.LOAD_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
};

export default docsReducer;
