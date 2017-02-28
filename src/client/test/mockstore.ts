
import configureMockStore from 'redux-mock-store';
import { Middleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
//import apolloClient from '../apolloClient';
import appLogic from '../logic';
import axios from 'axios';

const dependencies = {
  httpClient: axios,
};

const logicMiddleware = createLogicMiddleware(appLogic, dependencies);
//const apolloClientMiddleware = apolloClient.middleware();

const middlewares: Middleware[] = [
  //apolloClientMiddleware,
  logicMiddleware,
];

const mockStore = configureMockStore(middlewares);

export default mockStore;
