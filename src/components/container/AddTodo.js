import {connect} from 'react-redux';
import TodoForm from './TodoForm';
import {persistTodo, dismissModal} from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  handleCheckTap: (todo) => dispatch(persistTodo(todo)),
  handleTrashTap: (data) => dispatch(dismissModal(data)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
