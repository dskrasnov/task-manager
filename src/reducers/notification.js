import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../constants/action-types';

const defaultState = {
  isOpen: false,
  type: '',
  text: '',
};

const notificationReducer = (state = defaultState, { type, notificationType, text }) => {
  switch (type) {
    case SHOW_NOTIFICATION:
      return { isOpen: true, type: notificationType, text };

    case HIDE_NOTIFICATION:
      return { ...state, isOpen: false };

    default:
      return state;
  }
};

export default notificationReducer;
