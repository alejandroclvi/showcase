const initialState = [];

const labels = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LABEL':
      return [action.label].concat(state);
    case 'REMOVE_LABEL':
      return state.filter((label) => label.id !== action.id);
    case 'ADD_LABELS':
      return action.labels.concat(state);
    case 'UPDATE_LABELS':
      return action.labels;
    default:
      return state;
  }
};

export default labels;
