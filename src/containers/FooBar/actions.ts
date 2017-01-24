import * as T from './constants';
import { IFooBarAction } from './reducer';

export const loadDataInitiation = (): IFooBarAction => ({
  type: T.LOAD_DATA_INITIATION,
});

export const loadDataSuccess = (data: any): IFooBarAction => ({
  type: T.LOAD_DATA_SUCCESS,
  data,
});

export const loadDataFailure = (
  error: { message: string },
): IFooBarAction => ({
  type: T.LOAD_DATA_FAILURE,
  error,
});
