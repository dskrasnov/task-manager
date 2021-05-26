import { SHOW_NOTIFICATION } from '../constants/action-types';

const showNotification = (notificationType, text) => ({
  type: SHOW_NOTIFICATION,
  notificationType,
  text,
});

export default showNotification;
