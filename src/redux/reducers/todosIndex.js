const initialState = {
  index: 0,
};

const todosIndex = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INDEX':
      return {
        ...state,
        index: action.index,
      };
    default:
      return state;
  }
};

export default todosIndex;
