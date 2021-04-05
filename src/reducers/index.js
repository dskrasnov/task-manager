import { combineReducers } from 'redux';

import tasksReducer from './tasks';
import errorsReducer from './errors';
import taskListStateReducer from './task-list-state';

const applicationReducer = combineReducers({
  tasks: tasksReducer,
  errors: errorsReducer,
  taskListState: taskListStateReducer,
});

export default applicationReducer;
