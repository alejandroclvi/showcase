import {connect} from 'react-redux';
import {showModal} from '../../redux/actions';
import AddTodoButton from '../presentational/AddTodoButton';

const mapStateToProps = (dispatch) => ({
  showModal: (modal) => dispatch(showModal(modal)),
});

export default connect(null, mapStateToProps)(AddTodoButton);
