// import {  } from '../actions'

export const todosIndex = ({dispatch, getState}) => (next) => (action) => {
  if (action.type === 'SHOW_TODO') {
    // TODO: insert logic on the board hahahah
    console.log(getState());
  }

  next(action);
};
