const initialState = '';

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default search;
