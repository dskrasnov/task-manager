import { REMOVE_ERROR } from '../constants/action-types';

const removeError = id => ({
  type: REMOVE_ERROR,
  payload: id,
});

export default removeError;
