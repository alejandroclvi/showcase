import {search} from '../actions';
const emptyString = '';

export const searchFilter = ({dispatch}) => (next) => (action) => {
  next(action);
  if (action.type === 'SET_TODOS_VISIBILITY_FILTER') {
    dispatch(search(emptyString));
  }
};
