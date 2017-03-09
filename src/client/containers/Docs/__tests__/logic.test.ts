import { createMockStore } from 'redux-logic-test';
import * as actionTypes from '../constants';
import rootLogic from '../logic';

const dependencies = {
  httpClient: { // simulate an async fetch
    get(url) { return Promise.resolve({ data: 'testData' }); },
  },
};

describe('rootLogic tests', () => {
  describe('rootLogic test without reducers', () => {
    let store;
    beforeEach(() => {
      store = createMockStore({
        logic: rootLogic,
        injectedDeps: dependencies,
      });
    });

    it('should do something', (done) => {
      store.dispatch({ type: actionTypes.LOAD_INITIATION });
      store.whenComplete(() => {
        expect(store.actions).toEqual([
          { type: actionTypes.LOAD_INITIATION },
          { type: actionTypes.LOAD_SUCCESS, payload: 'testData' },
        ]);
        done();
      });
    });
  });
});
