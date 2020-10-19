import {connect} from 'react-redux';
import TodoList from '../presentational/TodoList';
import {showTodo} from '../../redux/actions/index';

const getVisibleTodos = (todos, filters, search) => {
  if (search.trim() !== '') {
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase()),
    );
  }
  if (filters[0] === 'SHOW_ALL') {
    return todos.filter((todo) => !todo.completed);
  } else {
    return todos.filter((todo) => {
      if (todo.labels && todo.labels.length > 0) {
        for (let label of todo.labels) {
          if (filters.indexOf(label.text) > -1) {
            return true;
          }
        }
      }

      return false;
    });
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(
    state.todos,
    state.todosVisibilityFilter,
    state.search,
  ),
});

const mapDispatchToProps = (dispatch) => ({
  onTodoTap: (todo) => dispatch(showTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
