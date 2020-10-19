/**
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyText from './MyText';

const SmallLabel = ({color, text}) => (
  <View style={[styles.wrapper, {backgroundColor: color}]}>
    <MyText style={styles.txt}> {text} </MyText>
  </View>
);

const styles = StyleSheet.create({
  txt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  wrapper: {
    marginRight: 3,
  },
});

export default SmallLabel;
