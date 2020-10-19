import {
  hydrateForm,
  clearForm,
  //toggleTodoImportance,
  pop,
  //updateTodo,
} from '../actions';

export const todoForm = ({dispatch}) => (next) => (action) => {
  next(action);
  if (action.type === 'SHOW_TODO') {
    dispatch(hydrateForm(action.todo));
  }
  if (action.type === 'SHOW_MODAL') {
    dispatch(clearForm());
  }
  if (action.type === 'TOGGLE_TODO_COMPLETION_FORM') {
    dispatch(pop());
  }
};
