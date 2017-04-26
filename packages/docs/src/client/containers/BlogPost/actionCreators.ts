import { ActionCreator, ActionCreatorsMapObject } from 'redux';
import { Input } from './types';
import * as types from './constants';
import {
  InputAction,
} from './actions';

type InputActionCreator = ActionCreator<InputAction>;
export const input: InputActionCreator = (input: Input) => ({
  type: types.INPUT,
  input,
});

export interface ActionCreatorTypes extends ActionCreatorsMapObject {
  input: InputActionCreator;
}
export const actionCreators: ActionCreatorTypes = {
  input,
};

export default actionCreators;
