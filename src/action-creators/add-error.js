import { ADD_ERROR } from '../constants/action-types';

const addError = text => ({
  type: ADD_ERROR,
  payload: text,
});

export default addError;
