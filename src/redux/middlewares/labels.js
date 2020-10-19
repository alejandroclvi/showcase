import {addLabels} from '../actions';

export const labels = ({dispatch}) => (next) => (action) => {
  if (action.type === 'UPDATE_LABELS') {
    const _action = {
      ...action,
      labels: action.labels.sort((a, b) => b.instances - a.instances), // sorts labels based on number of instances(desc)
    };
    next(_action);
  }
  next(action);
};
