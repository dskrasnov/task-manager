import {
  SET_LOGIN_DIALOG_OPEN,
  SET_LOGIN_DIALOG_BUSY,
  SET_LOGIN_DIALOG_FIELD_VALUE,
  SET_LOGIN_DIALOG_FIELD_ERROR,
  RESET_LOGIN_DIALOG_FIELD_ERROR,
  RESET_LOGIN_DIALOG_STATE,
  SET_LOGIN_DIALOG_GENERAL_ERROR,
  RESET_LOGIN_DIALOG_GENERAL_ERROR,
} from '../constants/action-types';

const defaultState = {
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
};

const loginDialogStateReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_LOGIN_DIALOG_OPEN:
      return { ...state, isOpen: payload };

    case SET_LOGIN_DIALOG_BUSY:
      return { ...state, isBusy: payload };

    case SET_LOGIN_DIALOG_FIELD_VALUE:
      return { ...state, fieldValue: { ...state.fieldValue, ...payload } };

    case SET_LOGIN_DIALOG_FIELD_ERROR:
      return { ...state, fieldError: { ...state.fieldError, ...payload } };

    case RESET_LOGIN_DIALOG_FIELD_ERROR:
      return { ...state, fieldError: { ...state.fieldError, [payload]: defaultState.fieldError[payload] } };

    case RESET_LOGIN_DIALOG_STATE:
      return defaultState;

    case SET_LOGIN_DIALOG_GENERAL_ERROR:
      return { ...state, generalError: payload };

    case RESET_LOGIN_DIALOG_GENERAL_ERROR:
      return { ...state, generalError: defaultState.generalError };

    default:
      return state;
  }
};

export default loginDialogStateReducer;
