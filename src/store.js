import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import applicationReducer from './reducers';

const composeEnhancers = composeWithDevTools({
  trace: true,
});

const store = createStore(applicationReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
