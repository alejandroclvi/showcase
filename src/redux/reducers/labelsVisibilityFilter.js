const initialState = 'SHOW_ALL';

const labelsVisibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LABELS_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default labelsVisibilityFilter;
