import * as T from './constants';

export interface IFooBarAction {
  type: T.LOAD_DATA_INITIATION_TYPE |
    T.LOAD_DATA_SUCCESS_TYPE |
      T.LOAD_DATA_FAILURE_TYPE;
  error?: { message: string };
  data?: any;
};

export interface IFooBarState {
  isLoading: boolean;
  error?: { message: string };
  data?: any;
};

export const initialState: IFooBarState = {
  isLoading: false,
  error: null,
  data: null,
};

const fooBarReducer = (
  state: IFooBarState = initialState,
  action: IFooBarAction,
): IFooBarState => {
  switch (action.type) {
    case T.LOAD_DATA_INITIATION:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case T.LOAD_DATA_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data,
      });
    case T.LOAD_DATA_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export default fooBarReducer;
