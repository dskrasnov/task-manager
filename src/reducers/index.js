import { combineReducers } from 'redux';

import tasksReducer from './tasks';
import errorsReducer from './errors';
import taskListStateReducer from './task-list-state';
import taskManageDialogStateReducer from './task-manage-dialog-state';

const applicationReducer = combineReducers({
  tasks: tasksReducer,
  errors: errorsReducer,
  taskListState: taskListStateReducer,
  taskManageDialogState: taskManageDialogStateReducer,
});

export default applicationReducer;
