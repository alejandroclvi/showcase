import {connect} from 'react-redux';
import TodoForm from './TodoForm';
import {removeTodoFromDB, toggleTodo, updateTodo} from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  handleCheckTap: (id) => dispatch(toggleTodo(id)), // not being used in todoform component
  handleTrashTap: (todo) => dispatch(removeTodoFromDB(todo)),
  updateTodo: (id) => dispatch(updateTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
