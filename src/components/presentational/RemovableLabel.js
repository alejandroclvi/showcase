import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import MyText from './MyText';

const RemovableLabel = ({text, style, onTap}) => (
  <View style={[styles.labelContainer, style]}>
    <View style={styles.textWrapper}>
      <MyText>{text}</MyText>
    </View>
    <View style={styles.separator} />
    <TouchableOpacity style={styles.iconWrapper} onPress={() => onTap(text)}>
      <Icon name="x" type="feather" color="black" size={10} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  labelContainer: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
    marginRight: 3,
  },
  iconWrapper: {
    marginRight: 3,
  },
});

export default RemovableLabel;
