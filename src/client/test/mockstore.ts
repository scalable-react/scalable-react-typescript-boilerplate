
import configureMockStore from 'redux-mock-store';
import { Middleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import rootLogic from '../logic';
import axios from 'axios';

const dependencies = {
  httpClient: axios,
};

const logicMiddleware = createLogicMiddleware(rootLogic, dependencies);

const middlewares: Middleware[] = [
  logicMiddleware,
];

const mockStore = configureMockStore(middlewares);

export default mockStore;
