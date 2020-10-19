/**
 * @flow
 */

import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const StarButton = ({handleTap, style, important}) => (
  <View style={[styles.container, style]}>
    <TouchableOpacity style={styles.opacityFilter} onPress={() => handleTap()}>
      <Icon
        name="star"
        type="simple-line-icons"
        size={30}
        color={important ? '#FFDF00' : 'white'}
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
  opacityFilter: {
    height: 50,
    width: 50,
    borderRadius: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    fontSize: 28,
    color: 'white',
  },
});

export default StarButton;
