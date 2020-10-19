/**
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import StarButton from './StarButton';
import TrashButton from './TrashButton';
import CheckButton from './CheckButton';

const TodoMenu = ({
  disableButton,
  handleTrashTap,
  handleStarTap,
  handleCheckTap,
  important,
  completed,
}) => (
  <View style={styles.container}>
    <TrashButton handleTap={handleTrashTap} />
    <StarButton important={important} handleTap={handleStarTap} />
    <CheckButton
      enabled={disableButton}
      completed={completed}
      handleTap={handleCheckTap}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    marginTop: 40,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: '10%',
  },
});

export default TodoMenu;
