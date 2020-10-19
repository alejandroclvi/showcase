import {combineReducers} from 'redux';
import navigation from './navigation';
import todos from './todos';
import labels from './labels';
import labelsVisibilityFilter from './labelsVisibilityFilter';
import todosVisibilityFilter from './todosVisibilityFilter';
import todoForm from './todoForm';
import search from './search';
import user from './user';
import todosIndex from './todosIndex';

export default combineReducers({
  todosIndex,
  user,
  search,
  todoForm,
  navigation,
  todos,
  todosVisibilityFilter,
  labels,
  labelsVisibilityFilter,
});
