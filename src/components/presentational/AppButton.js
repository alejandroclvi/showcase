/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const AppButton = ({text, handleTap}) => (
  <TouchableOpacity style={styles.button} onPress={() => handleTap()}>
    <Text style={styles.buttonTxt}>{text}</Text>
    <View style={styles.line} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F3F40',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  line: {
    marginTop: 5,
    height: 1.5,
    width: '45%',
    backgroundColor: 'white',
  },
});

export default AppButton;
