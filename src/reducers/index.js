import { combineReducers } from 'redux';

import tasksReducer from './tasks';
import errorsReducer from './errors';
import notificationReducer from './notification';
import taskListStateReducer from './task-list-state';
import dialogStateReducer from './dialog-state';
import authorizationStateReducer from './authorization-state';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  errors: errorsReducer,
  notification: notificationReducer,
  taskListState: taskListStateReducer,
  dialogState: dialogStateReducer,
  authorizationState: authorizationStateReducer,
});

export default rootReducer;
