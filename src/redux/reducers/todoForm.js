const initialState = {
  text: '',
  description: '',
  labels: [],
  index: 0,
  important: false,
  completed: false,
  id: null,
};

const todoForm = (state = initialState, action) => {
  switch (action.type) {
    case 'HYDRATE_FORM':
      return action.todo;
    case 'CLEAR_FORM':
      return initialState;
    case 'TOGGLE_IMPORTANCE_FORM':
      return {
        ...state,
        important: !state.important,
      };
    case 'UPDATE_TODO_TEXT_FORM':
      return {
        ...state,
        text: action.text,
      };
    case 'UPDATE_TODO_DESCRIPTION_FORM':
      return {
        ...state,
        description: action.description,
      };
    case 'UPDATE_TODO_LABELS_FORM':
      return {
        ...state,
        labels: action.labels,
      };
    case 'TOGGLE_TODO_COMPLETION_FORM':
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

export default todoForm;
