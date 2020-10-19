import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import {createLogger} from 'redux-logger';
import {
  navigation,
  todoForm,
  todos,
  searchFilter,
  listeners,
  labels,
  todosIndex,
} from './middlewares/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger();

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(
      todosIndex,
      labels,
      sagaMiddleware,
      searchFilter,
      navigation,
      todoForm,
      todos,
      listeners,
      loggerMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);
