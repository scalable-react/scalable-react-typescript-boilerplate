import {DefaultAction} from './actions';
import * as types from './constants';

export const defaultAction = (): DefaultAction => ({
  type: types.DEFAULT_ACTION_TYPE,
});
