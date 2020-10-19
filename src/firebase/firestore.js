import firestore from '@react-native-firebase/firestore';
import store from '../redux/store';
import hash from '../utils/hash';
import {setTodosVisibilityFilter} from '../redux/actions/index';

const db = firestore();

export const persistTodo = async (todo) => {
  const user = store.getState().user.uid;
  const indexRef = await db
    .collection('users')
    .doc(user)
    .collection('todos')
    .doc('index');
  const todoRef = await db
    .collection('users')
    .doc(user)
    .collection('todos')
    .doc();
  const newTodo = {
    ...todo,
    id: todoRef.id,
  };
  return indexRef.get().then((doc) => {
    if (doc.exists) {
      const index = doc.data().index;
      console.log(doc.data());
      console.log('hire', index);
      // eslint-disable-next-line radix
      newTodo.index = parseInt(index) + 1;
    }
    todoRef.set(newTodo);
    return newTodo;
  });
};

export const persistLabels = (labels) => {
  const user = store.getState().user.uid;
  try {
    let promises = [];
    if (labels && labels.length > 0) {
      for (const label of labels) {
        const id = hash(label.text);
        const docRef = db.doc(`users/${user}/labels/${id}`);
        docRef.get().then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            promises.push(
              docRef.update({
                instances: data.instances + 1,
              }),
            );
          } else {
            promises.push(docRef.set({...label, instances: 1}));
          }
        });
      }
      return Promise.all(promises);
    } else {
      return null;
    }
  } catch (error) {
    console.log('Ops, something went wrong. \nerror:', error);
  }
};

export const removeTodo = (todo) => {
  const user = store.getState().user.uid;
  let promises = [];
  promises.push(
    db
      .collection('users')
      .doc(user)
      .collection('todos')
      .doc(todo.id)
      .delete()
      .then(() => {
        // TODO: dispatch an action to notify todo was removed successfully
        console.log('Document successfully deleted!');
      }),
  );
  const labels = todo.labels;
  if (labels && labels.length) {
    for (const label of labels) {
      const id = hash(label.text);
      const docRef = db.doc(`users/${user}/labels/${id}`);
      docRef.get().then((doc) => {
        const data = doc.data();
        if (data.instances === 1) {
          // remove label
          promises.push(
            docRef
              .delete()
              .then(() => {
                console.log('Document successfully deleted! = ');
              })
              .catch((error) => console.log(error)),
          );
        } else {
          promises.push(
            docRef.update({
              instances: data.instances - 1,
            }),
          );
        }
      });
    }
    return Promise.all(promises).catch((error) => {
      // TODO: dispatch an action notifying there was an error trying to remove todo
      console.error('Error removing document: ', error);
    });
  } else {
    return null;
  }
};

export const addLabel = (label) => {
  const user = store.getState().user.uid;
  const id = hash(label.text);
  const docRef = db.doc(`users/${user}/labels/${id}`);
  try {
    docRef.get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        return docRef
          .update({instances: data.instances + 1})
          .catch((error) => console.log(error));
      } else {
        //TODO: create label
        return docRef
          .set({...label, instances: 1})
          .catch((error) => console.log(error));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeLabel = (label) => {
  const user = store.getState().user.uid;
  const todosVisibilityFilter = store.getState().todosVisibilityFilter;
  const id = hash(label.text);
  const docRef = db.doc(`users/${user}/labels/${id}`);
  try {
    return docRef.get().then((doc) => {
      const data = doc.data();
      if (data.instances === 1) {
        //remove todo
        return docRef
          .delete()
          .then(() => {
            console.log('Document successfully deleted!');
            // if the label that was removed was set as a filter, undo it.
            if (todosVisibilityFilter.includes(label.text)) {
              store.dispatch(setTodosVisibilityFilter(label.text));
            }
          })
          .catch((error) => console.log(error));
      } else {
        return docRef
          .update({
            instances: data.instances - 1,
          })
          .catch((error) => console.log(error));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = (todo) => {
  const id = todo.id;
  const user = store.getState().user.uid;
  const docRef = db.doc(`users/${user}/todos/${id}`);
  return docRef.update(todo).catch((error) => {
    //TODO: dispatch an action notifiyng of failure to update todo
    console.log('there was an error updating todo', error);
  });
};

export const setGlobalIndex = (globalIndex) => {
  const user = store.getState().user.uid;
  const indexRef = db.doc(`users/${user}/todos/index`);
  return indexRef
    .set({index: globalIndex})
    .then(() => {
      return true;
    })
    .catch((error) => console.log(error));
};
