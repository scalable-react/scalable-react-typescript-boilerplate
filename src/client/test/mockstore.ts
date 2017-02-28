
import configureMockStore from 'redux-mock-store';
import { Middleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import appLogic from '../logic';
import axios from 'axios';

const dependencies = {
  httpClient: axios,
};

const logicMiddleware = createLogicMiddleware(appLogic, dependencies);

const middlewares: Middleware[] = [
  logicMiddleware,
];

const mockStore = configureMockStore(middlewares);

export default mockStore;
