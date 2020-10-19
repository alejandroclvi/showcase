import {addLabel, removeLabel, addLabels} from './labels';
import {addTodo, removeTodo, toggleTodo, updateTodo} from './todos';
import {setLabelsVisibilityFilter} from './labelsVisibilityFilter';
import {setTodosVisibilityFilter} from './todosVisibilityFilter';
import {
  showModal,
  dismissModal,
  showLightBox,
  dismissLightBox,
  push,
  pop,
  resetTo,
  showTodo,
} from './navigation';
import {
  hydrateForm,
  clearForm,
  toggleTodoImportance,
  updateTodoText,
  updateTodoDescription,
  updateTodoLabels,
  toggleTodoCompletion,
} from './todoForm';
import {search} from './search';
import {
  updateTodos,
  updateLabels,
  signAnonym,
  userSignedIn,
  persistTodo,
  persistLabels,
  removeTodoFromDB,
  removeLabelFromDB,
  addLabelToDB,
} from './firebaseAPI';
import {setIndex} from './todosIndex';

export {
  setIndex,
  addLabelToDB,
  removeLabelFromDB,
  removeTodoFromDB,
  persistLabels,
  persistTodo,
  userSignedIn,
  signAnonym,
  updateTodos,
  updateLabels,
  search,
  updateTodo,
  toggleTodoImportance,
  updateTodoText,
  updateTodoDescription,
  updateTodoLabels,
  toggleTodoCompletion,
  clearForm,
  hydrateForm,
  showTodo,
  resetTo,
  pop,
  push,
  showLightBox,
  dismissLightBox,
  showModal,
  dismissModal,
  addLabels,
  addLabel,
  removeLabel,
  addTodo,
  removeTodo,
  toggleTodo,
  setLabelsVisibilityFilter,
  setTodosVisibilityFilter,
};
