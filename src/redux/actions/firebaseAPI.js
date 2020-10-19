export const updateTodos = (todos) => ({
  type: 'UPDATE_TODOS',
  todos,
});

export const updateLabels = (labels) => ({
  type: 'UPDATE_LABELS',
  labels,
});

export const signAnonym = () => ({
  type: 'SIGN_IN_ANONYM',
});

export const userSignedIn = (uid) => ({
  type: 'USER_SIGNED_IN',
  uid,
});

export const persistTodo = (todo) => ({
  type: 'PERSIST_TODO',
  todo,
});

export const persistLabels = (labels) => ({
  type: 'PERSIST_LABELS',
  labels,
});

export const removeTodoFromDB = (todo) => ({
  type: 'REMOVE_TODO_FROM_DB',
  todo,
});

export const removeLabelFromDB = (label) => ({
  type: 'REMOVE_LABEL_FROM_DB',
  label,
});

export const addLabelToDB = (label) => ({
  type: 'ADD_LABEL_TO_DB',
  label,
});
