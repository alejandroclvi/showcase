/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, Button} from 'react-native';
import addNavigation from '../utils/addNavigation';
import SCREENS from '../utils/screens';

const Home = ({push}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <Text>Home Screen</Text>
        <Button title="press me" onPress={() => push(SCREENS.task)} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default addNavigation(Home, SCREENS.home);
