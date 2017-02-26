import { createMockStore } from 'redux-logic-test';
import { createStore, applyMiddleware, Middleware } from 'redux';
import * as actionTypes from '../constants';
import appLogic from '../logic';

const dependencies = { 
  httpClient: { //simulate an async fetch
    get(url) { return Promise.resolve({data: 'testData'}); }
  }
};


describe('appLogic tests', () => {
  describe('appLogic test without reducers', () => {
    let store;
    beforeEach(() => {
      store = createMockStore({
        logic: appLogic,
        injectedDeps: dependencies,
      });
    });

    it('should do something', done => {
      store.dispatch({type: actionTypes.LOAD_INTIATION});
      store.whenComplete(() => {
        expect(store.actions).toEqual([
          { type: actionTypes.LOAD_INTIATION},
          { type: actionTypes.LOAD_SUCCESS, payload: 'testData'}
        ]);
        done();
      });
    });
  });
});
