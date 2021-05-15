import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import applicationReducer from './reducers';
import fetchTasksSaga from './sagas/fetch-tasks';

const composeEnhancers = composeWithDevTools({
  trace: true,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(applicationReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(fetchTasksSaga);

export default store;
