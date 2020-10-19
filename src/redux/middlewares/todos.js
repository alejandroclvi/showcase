import {
  dismissModal,
  addTodo,
  pop,
  persistLabels,
  removeTodo,
  updateTodo,
  setIndex,
} from '../actions';

export const todos = ({dispatch, getState}) => (next) => (action) => {
  if (action.type === 'SHOW_TODO') {
    const index = getState().todosIndex.index;
    const newGlobalIndex = index + 1;
    const newTodo = {
      ...action.todo,
      index: newGlobalIndex,
    };
    dispatch(updateTodo(newTodo));
    dispatch(setIndex(newGlobalIndex));
    dispatch({type: 'SHOW_TODO_INDEX_NEEDS_UPDATE', todo: newTodo});
  }
  if (action.type === 'ADD_TODO') {
    dispatch(setIndex(action.todo.index));
    console.log('action', action);
    dispatch(dismissModal(action.todo.componentId));
  }
  if (action.type === 'TOGGLE_TODO') {
    dispatch(pop());
  }
  if (action.type === 'REMOVE_TODO_FROM_DB') {
    dispatch(removeTodo(action.todo));
    dispatch(pop());
  }
  if (action.type === 'PERSIST_TODO_SUCCESS') {
    dispatch(addTodo(action.todo));
    const labels = action.todo.labels;
    if (labels && labels.length > 0) {
      dispatch(persistLabels(action.todo.labels));
    }
  }
  if (action.type === 'REMOVE_TODO_FAIL') {
    //TODO: UNDO REMOVE TODO
    //dispatch(addTodo(action.todo))
    // show a pop up, notifying the user about the error
    console.log(
      'action dispatched ===> REMOVE_TODO_FAIL, TODO: take care of this',
    );
  }
  // if(action.type === 'UPDATE_TODOS') {
  //     let _action = {
  //         ...action,
  //         todos: action.todos.sort((a,b) => b.views - a.views )
  //     }
  //     next(_action);
  // }
  next(action);
};
