/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';
import SCREENS from '../utils/screens';
import addNavigation from '../utils/addNavigation';

const Task = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <Text>Task Screen</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default addNavigation(Task, SCREENS.task);
