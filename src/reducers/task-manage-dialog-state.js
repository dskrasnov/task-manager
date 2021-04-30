import {
  SET_TASK_MANAGE_DIALOG_OPEN,
  SET_TASK_MANAGE_DIALOG_BUSY,
  SET_TASK_MANAGE_DIALOG_FIELD_VALUE,
  SET_TASK_MANAGE_DIALOG_FIELD_ERROR,
  RESET_TASK_MANAGE_DIALOG_FIELD_ERROR,
  RESET_TASK_MANAGE_DIALOG_STATE,
  SET_TASK_MANAGE_DIALOG_GENERAL_ERROR,
  RESET_TASK_MANAGE_DIALOG_GENERAL_ERROR,
} from '../constants/action-types';

const defaultState = {
  fieldValue: {
    id: null,
    username: '',
    email: '',
    text: '',
    status: null,
  },
  fieldError: {
    username: null,
    email: null,
    text: null,
  },
  generalError: null,
  isOpen: false,
  isBusy: false,
};

const taskManageDialogStateReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_TASK_MANAGE_DIALOG_OPEN:
      return { ...state, isOpen: payload };

    case SET_TASK_MANAGE_DIALOG_BUSY:
      return { ...state, isBusy: payload };

    case SET_TASK_MANAGE_DIALOG_FIELD_VALUE:
      return { ...state, fieldValue: { ...state.fieldValue, ...payload } };

    case SET_TASK_MANAGE_DIALOG_FIELD_ERROR:
      return { ...state, fieldError: { ...state.fieldError, ...payload } };

    case RESET_TASK_MANAGE_DIALOG_FIELD_ERROR:
      return { ...state, fieldError: { ...state.fieldError, [payload]: defaultState.fieldError[payload] } };

    case RESET_TASK_MANAGE_DIALOG_STATE:
      return defaultState;

    case SET_TASK_MANAGE_DIALOG_GENERAL_ERROR:
      return { ...state, generalError: payload };

    case RESET_TASK_MANAGE_DIALOG_GENERAL_ERROR:
      return { ...state, generalError: defaultState.generalError };

    default:
      return state;
  }
};

export default taskManageDialogStateReducer;
