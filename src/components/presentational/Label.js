/**
 * @flow
 */

import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import MyText from './MyText';
import {labelHeight} from '../../constants/styles';

const labelTextLengthToRation = 14;

const Label = ({color, text, onTap, actives}) =>
  actives.indexOf(text) > -1 ? (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[
          styles.activeLabel,
          {
            width: text.length * labelTextLengthToRation,
            borderColor: color,
            shadowColor: color,
            backgroundColor: color,
          },
        ]}
        onPress={() => onTap(text)}>
        <MyText style={styles.txt}> {text} </MyText>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles._wrapper}>
      <TouchableOpacity
        style={[
          styles.label,
          {
            width: text.length * labelTextLengthToRation,
            backgroundColor: color,
          },
        ]}
        onPress={() => onTap(text)}>
        <MyText style={styles.txt}> {text} </MyText>
      </TouchableOpacity>
    </View>
  );

const styles = StyleSheet.create({
  label: {
    height: labelHeight,
    borderRadius: 14,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
  },
  activeLabel: {
    height: labelHeight,
    borderRadius: 14,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    zIndex: 1,
    shadowRadius: 6,
    shadowOffset: {width: 1.2, height: 1.2},
    shadowOpacity: 1.25,
  },
  txt: {
    fontSize: 14,
  },
  wrapper: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  _wrapper: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Label;
