/**
 * @flow
 */

import React from 'react';
import {TextInput, Keyboard} from 'react-native';

const MyTextInput = ({style, value, onChangeText, placeholder, ...props}) => (
  <TextInput
    {...props}
    style={style}
    value={value}
    onChangeText={(text) => onChangeText(text)}
    placeholder={placeholder}
    autoCapitalize="none"
    autoCorrect={false}
    returnKeyType="done"
    blurOnSubmit={false}
    onSubmitEditing={Keyboard.dismiss}
  />
);

export default MyTextInput;
