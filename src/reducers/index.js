import { combineReducers } from 'redux';

import tasksReducer from './tasks';
import errorsReducer from './errors';
import taskListStateReducer from './task-list-state';
import taskManageDialogStateReducer from './task-manage-dialog-state';
import loginDialogStateReducer from './login-dialog-state';
import authorizationStateReducer from './authorization-state';

const applicationReducer = combineReducers({
  tasks: tasksReducer,
  errors: errorsReducer,
  taskListState: taskListStateReducer,
  taskManageDialogState: taskManageDialogStateReducer,
  loginDialogState: loginDialogStateReducer,
  authorizationState: authorizationStateReducer,
});

export default applicationReducer;
