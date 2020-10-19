export const hydrateForm = (todo) => ({
  type: 'HYDRATE_FORM',
  todo,
});

export const clearForm = () => ({
  type: 'CLEAR_FORM',
});

export const toggleTodoImportance = () => ({
  type: 'TOGGLE_IMPORTANCE_FORM',
});

export const updateTodoText = (text) => ({
  type: 'UPDATE_TODO_TEXT_FORM',
  text,
});

export const updateTodoDescription = (description) => ({
  type: 'UPDATE_TODO_DESCRIPTION_FORM',
  description,
});

export const updateTodoLabels = (labels) => ({
  type: 'UPDATE_TODO_LABELS_FORM',
  labels,
});

export const toggleTodoCompletion = () => ({
  type: 'TOGGLE_TODO_COMPLETION_FORM',
});
