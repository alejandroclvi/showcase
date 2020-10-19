/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import Home from './screens/Home';

const App = (props) => {
  // TODO: isUserLoggedin ? Home : Login
  return <Home {...props} />;
};

export default App;
