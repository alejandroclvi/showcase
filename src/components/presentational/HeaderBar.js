/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderBar = ({title}) => (
  <View style={styles.bar}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  bar: {
    height: '10%',
    width: '100%',
    backgroundColor: '#3F3F40',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HeaderBar;
