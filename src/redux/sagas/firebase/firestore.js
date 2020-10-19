import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  persistTodo,
  persistLabels,
  removeTodo,
  updateTodo,
  removeLabel,
  addLabel,
  setGlobalIndex,
} from '../../../firebase/firestore';

function* persistTodoSaga(action) {
  try {
    const todo = yield call(persistTodo, action.todo);
    yield put({type: 'PERSIST_TODO_SUCCESS', todo});
  } catch (error) {
    yield put({type: 'PERSIST_TODO_FAIL', error});
  }
}

export function* watchPersistTodo() {
  yield takeEvery('PERSIST_TODO', persistTodoSaga);
}

function* persistLabelsSaga(action) {
  try {
    const labels = action.labels;
    yield call(persistLabels, labels);
    yield put({type: 'PERSIST_LABELS_SUCCESS', labels});
  } catch (error) {
    yield put({type: 'PERSIST_LABELS_FAIL', error});
  }
}

export function* watchPersistLabels() {
  yield takeEvery('PERSIST_LABELS', persistLabelsSaga);
}

function* removeTodoSaga(action) {
  try {
    yield call(removeTodo, action.todo);
    yield put({type: 'REMOVE_TODO_SUCCESS', action});
  } catch (error) {
    yield put({type: 'REMOVE_TODO_FAIL'});
  }
}

export function* watchRemoveTodo() {
  yield takeEvery('REMOVE_TODO_FROM_DB', removeTodoSaga);
}

function* updateTodoSaga(action) {
  try {
    yield call(updateTodo, action.todo);
    yield put({type: 'UPDATE_TODO_SUCCESS'});
  } catch (error) {
    //TODO: dispatch an action with the info of the todo that was not updated on db
    yield put({type: 'UPDATE_TODO_FAIL'});
  }
}

export function* watchUpdateTodo() {
  yield takeLatest('UPDATE_TODO', updateTodoSaga);
}

function* removeLabelSaga(action) {
  try {
    yield call(removeLabel, action.label);
    yield put({type: 'REMOVE_LABEL_FROM_DB_SUCCESS'});
  } catch (error) {
    // TODO: notify user label couldn't be removed
    yield put({type: 'REMOVE_LABEL_FROM_DB_FAIL'});
  }
}

export function* watchRemoveLabel() {
  yield takeEvery('REMOVE_LABEL_FROM_DB', removeLabelSaga);
}

function* addLabelSaga(action) {
  try {
    yield call(addLabel, action.label);
    yield put({type: 'ADD_LABEL_TO_DB_SUCCESS'});
  } catch (error) {
    yield put({type: 'ADD_LABEL_TO_DB_FAIL'});
    console.log(error);
  }
}

export function* watchAddLabel() {
  yield takeEvery('ADD_LABEL_TO_DB', addLabelSaga);
}

function* updateGlobalIndex(action) {
  try {
    console.log(action.todo);
    yield call(setGlobalIndex, action.todo.index);
    yield put({type: 'GLOBAL_INDEX_UPDATE_SUCESS'});
  } catch (error) {
    yield put({type: 'GLOBAL_INDEX_UPDATE_FAIL'});
    console.log(error);
  }
}

export function* watchAddTodo() {
  yield takeEvery('PERSIST_TODO_SUCCESS', updateGlobalIndex);
}

export function* watchShowTodo() {
  yield takeEvery('SHOW_TODO_INDEX_NEEDS_UPDATE', updateGlobalIndex);
}
