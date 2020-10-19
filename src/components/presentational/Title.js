/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = ({children, deactivate}) => (
  <View style={styles.wrapper}>
    <Text style={deactivate ? styles.deactivate : styles.title}>
      {children}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 5,
  },
  deactivate: {
    fontFamily: 'AppleSDGothicNeo-Bold',
    fontSize: 18,
    color: 'lightgrey',
    textDecorationLine: 'line-through',
  },
  title: {
    fontFamily: 'AppleSDGothicNeo-Bold',
    fontSize: 18,
  },
});

export default Title;
