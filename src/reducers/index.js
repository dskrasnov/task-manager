import { combineReducers } from 'redux';

import tasksReducer from './tasks';
import errorsReducer from './errors';
import taskListStateReducer from './task-list-state';
import dialogStateReducer from './dialog-state';
import authorizationStateReducer from './authorization-state';

const applicationReducer = combineReducers({
  tasks: tasksReducer,
  errors: errorsReducer,
  taskListState: taskListStateReducer,
  dialogState: dialogStateReducer,
  authorizationState: authorizationStateReducer,
});

export default applicationReducer;
