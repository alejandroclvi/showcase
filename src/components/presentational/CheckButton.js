/**
 * @flow
 */

import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const CheckButton = ({enabled, handleTap, style, completed}) => (
  <View
    style={
      completed ? [styles.activeContainer, style] : [styles.container, style]
    }>
    <TouchableOpacity
      disabled={!enabled}
      style={styles.opacityFilter}
      onPress={() => handleTap()}>
      <Icon
        name="check"
        type="entypo"
        size={30}
        color={completed ? 'white' : enabled ? '#1e90ff' : 'grey'}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'lightgrey',
  },
  activeContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#56f441',
  },
  opacityFilter: {
    height: 50,
    width: 50,
    borderRadius: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CheckButton;
