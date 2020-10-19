import auth from '@react-native-firebase/auth';

export const signInAnonym = async () => {
  await auth().signInAnonymously();
  let userId = null;
  await auth().onAuthStateChanged((user) => {
    if (user) {
      const isAnonymous = user.isAnonymous; // TODO: what are we doing with this?
      const uid = user.uid;
      userId = uid;
    } else {
      // TODO: Call some action that logs out the user, takes it to first screen?
      return null;
    }
  });
  return userId;
};
