/**
 * @flow
 */

import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

const ColorSample = ({handleActiveColor, color, active}) =>
  active === color ? (
    <TouchableOpacity onPress={() => handleActiveColor(color)}>
      <View
        style={[
          styles.activeSampleColor,
          {shadowColor: color, backgroundColor: color},
        ]}
      />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => handleActiveColor(color)}>
      <View style={[styles.sampleColor, {backgroundColor: color}]} />
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  sampleColor: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'yellow',
    borderWidth: 2,
  },
  activeSampleColor: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'yellow',
    borderWidth: 2,
    shadowRadius: 10,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1.75,
  },
});

export default ColorSample;
