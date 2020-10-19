const handleTodosFilter = (filter, filters) => {
  if (filters[0] === 'SHOW_ALL') {
    return [filter];
  } else if (filters.indexOf(filter) > -1) {
    const newFilters = filters.filter((_filter) => _filter !== filter);
    if (newFilters.length === 0) {
      return ['SHOW_ALL'];
    }
    return newFilters;
  } else {
    return filters.concat([filter]);
  }
};

const initialState = ['SHOW_ALL'];
const todosVisibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODOS_VISIBILITY_FILTER':
      return handleTodosFilter(action.filter, state);
    default:
      return state;
  }
};

export default todosVisibilityFilter;
