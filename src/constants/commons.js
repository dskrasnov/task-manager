export const BACKEND_URL = 'https://uxcandy.com/~shapoval/test-task-backend/v2/';
export const DEVELOPER_NAME = 'dskrasnov';

export const BACKEND_STATUS = {
  OK: 'ok',
  ERROR: 'error',
};

export const TASKS_PER_PAGE = 3;

export const TASK_SORTING_FIELD = {
  NO_SORTING: 'NO_SORTING',
  ID: 'id',
  USERNAME: 'username',
  EMAIL: 'email',
  STATUS: 'status',
};

export const TASK_SORTING_DIRECTION = {
  ASC: 'asc',
  DESC: 'desc',
};

export const FIELD_EMPTY_ERROR = 'Поле не может быть пустым';

export const TASK_STATUS_MASK = {
  EDITED: 0b01,
  DONE: 0b10,
};

export const DIALOG_NAME = {
  TASK_MANAGE: 'taskManage',
  LOGIN: 'login',
};

export const AUTHORIZATION_COOKIE_NAME = {
  TOKEN: 'token',
  TOKEN_EXPIRES: 'tokenExpires',
};

export const NOTIFICATION_TYPE = {
  SUCCESS: 'success',
  INFO: 'info',
};

export const TASK_LIST_DEFAULT_STATE = {
  pagesTotal: 0,
  currentPage: 1,
  sortingField: TASK_SORTING_FIELD.NO_SORTING,
  sortingDirection: TASK_SORTING_DIRECTION.ASC,
  isInitialDataLoaded: false,
};
