import { REMOVE_ERROR } from '../constants/action-types';

const removeError = errorId => ({
  type: REMOVE_ERROR,
  payload: errorId,
});

export default removeError;
