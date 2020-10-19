import {initListeners} from '../../firebase/eventEmitter';

export const listeners = ({dispatch}) => (next) => (action) => {
  next(action);
  if (action.type === 'SIGN_IN_ANONYM_SUCCESS') {
    initListeners(action.uid);
  }
};
