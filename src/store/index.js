import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import {
  offlineMiddleware,
  suspendSaga,
  consumeActionMiddleware,
} from 'redux-offline-queue';

const middleware = [];

export const confStore = (sagaMiddleware) => {
  middleware.push(offlineMiddleware());
  middleware.push(suspendSaga(sagaMiddleware));
  middleware.push(consumeActionMiddleware());
  return createStore(rootReducer, applyMiddleware(...middleware))
}