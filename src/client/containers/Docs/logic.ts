import { createLogic } from 'redux-logic';
import * as actionTypes from './constants';

const url = 'https://raw.githubusercontent.com/RyanCCollins/scalable-react-ts-boilerplate/master/README.md';

export const fetchLogic = createLogic({
  type: actionTypes.LOAD_INITIATION,
  cancelType: actionTypes.LOAD_CANCEL,
  latest: true, // take latest only
  processOptions: {
    dispatchReturn: true,
    successType: actionTypes.LOAD_SUCCESS,
    failType: actionTypes.LOAD_FAILURE,
  },

  process({ httpClient }) {
    return httpClient.get(url)
      .then((response) => response.data);
  },
});

export default [
  fetchLogic,
];
