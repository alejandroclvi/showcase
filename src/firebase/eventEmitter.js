import firestore from '@react-native-firebase/firestore';
import {updateTodos, updateLabels, setIndex} from '../redux/actions';
import store from '../redux/store';
// used to unsub listeners
let listeners = [];
const db = firestore();

const OMIT = ['index'];

// listeners
const todosRef = async (user) => {
  await db
    .collection('users')
    .doc(user)
    .collection('todos')
    .orderBy('index', 'desc')
    .onSnapshot((snapshot) => {
      let data = [];
      console.log('snap::', snapshot);
      snapshot.forEach((todo) => {
        if (!OMIT.includes(todo.ref._documentPath._parts.pop())) {
          data.push(todo.data());
        }
      });
      store.dispatch(updateTodos(data));
    });
};

const labelsRef = async (user) => {
  await db
    .collection('users')
    .doc(user)
    .collection('labels')
    .onSnapshot((snapshot) => {
      let data = [];
      snapshot.forEach((label) => data.push(label.data()));
      store.dispatch(updateLabels(data));
    });
};

const globalIndexRef = (user) => {
  try {
    return db
      .collection('users')
      .doc(user)
      .collection('todos')
      .doc('index')
      .get()
      .then((doc) => {
        if (doc.exists) {
          const index = doc.data().index;
          store.dispatch(setIndex(index));
        } else {
          const index = {index: 0}; // If an index doesn't already exist, set it to 0
          return db
            .doc(`users/${user}/todos/index`)
            .set(index)
            .then(() => store.dispatch(setIndex(index)));
        }
      });
  } catch (error) {
    console.log(JSON.stringify(error));
    // TODO: handle error properly

    // return db.doc(`/users/${user}/todos/index`).set(index).then(() =>
    //     store.dispatch(setIndex(index))
    // )
  }
};

// func to start listeners
export const initListeners = (user) => {
  listeners.push(todosRef(user), labelsRef(user), globalIndexRef(user));
  return Promise.all(listeners);
};

// detach listeners
export const detachListeners = () => listeners.map((listener) => listener());
