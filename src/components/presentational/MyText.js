/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';

const MyText = ({children, style, ...props}) => (
  <Text {...props} style={[styles.text, style]}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AppleSDGothicNeo-Bold',
  },
});

export default MyText;
