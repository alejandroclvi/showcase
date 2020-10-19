const initialState = [];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.todo]);
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if (todo.id === action.todo.id) {
          return action.todo;
        }
        return todo;
      });
    case 'UPDATE_TODOS':
      return action.todos;
    default:
      return state;
  }
};

export default todos;
