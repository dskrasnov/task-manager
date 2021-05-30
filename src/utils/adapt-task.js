import { TASK_STATUS_MASK } from '../constants/commons';

const adaptTask = ({ status: taskStatus, ...rest }) => {
  const binaryStatus = parseInt(taskStatus, 2);

  /* eslint-disable no-bitwise */

  const isEdited = !!(binaryStatus & TASK_STATUS_MASK.EDITED);
  const isDone = !!(binaryStatus & TASK_STATUS_MASK.DONE);

  /* eslint-enable no-bitwise */

  return { ...rest, isEdited, isDone };
};

export default adaptTask;
