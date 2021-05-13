import {
  SET_DIALOG_OPEN,
  SET_DIALOG_BUSY,
  SET_DIALOG_FIELD_VALUE,
  SET_DIALOG_FIELD_ERROR,
  RESET_DIALOG_FIELD_ERROR,
  RESET_DIALOG_STATE,
  SET_DIALOG_GENERAL_ERROR,
  RESET_DIALOG_GENERAL_ERROR,
} from '../constants/action-types';

import { DIALOG_NAME } from '../constants/commons';

const defaultState = {
  [DIALOG_NAME.TASK_MANAGE]: {
    fieldValue: {
      id: null,
      username: '',
      email: '',
      text: '',
      oldText: null,
      isAlreadyEdited: false,
      isDone: false,
    },

    fieldError: {
      username: null,
      email: null,
      text: null,
    },

    generalError: null,
    isOpen: false,
    isBusy: false,
  },

  [DIALOG_NAME.LOGIN]: {
    fieldValue: {
      username: '',
      password: '',
    },

    fieldError: {
      username: null,
      password: null,
    },

    generalError: null,
    isOpen: false,
    isBusy: false,
  },
};

const dialogStateReducer = (state = defaultState, { type, dialogName, payload }) => {
  switch (type) {
    case SET_DIALOG_OPEN:
      return { ...state, [dialogName]: { ...state[dialogName], isOpen: payload } };

    case SET_DIALOG_BUSY:
      return { ...state, [dialogName]: { ...state[dialogName], isBusy: payload } };

    case SET_DIALOG_FIELD_VALUE:
      return {
        ...state,
        [dialogName]: {
          ...state[dialogName],
          fieldValue: {
            ...state[dialogName].fieldValue,
            ...payload,
          },
        },
      };

    case SET_DIALOG_FIELD_ERROR:
      return {
        ...state,
        [dialogName]: {
          ...state[dialogName],
          fieldError: {
            ...state[dialogName].fieldError,
            ...payload,
          },
        },
      };

    case RESET_DIALOG_FIELD_ERROR:
      return {
        ...state,
        [dialogName]: {
          ...state[dialogName],
          fieldError: {
            ...state[dialogName].fieldError,
            [payload]: defaultState[dialogName].fieldError[payload],
          },
        },
      };

    case RESET_DIALOG_STATE:
      return { ...state, [dialogName]: defaultState[dialogName] };

    case SET_DIALOG_GENERAL_ERROR:
      return { ...state, [dialogName]: { ...state[dialogName], generalError: payload } };

    case RESET_DIALOG_GENERAL_ERROR:
      return {
        ...state,
        [dialogName]: {
          ...state[dialogName],
          generalError: defaultState[dialogName].generalError,
        },
      };

    default:
      return state;
  }
};

export default dialogStateReducer;
