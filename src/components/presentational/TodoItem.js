/**
 * @flow
 */

import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Title from './Title';
import {Icon} from 'react-native-elements';
import SmallLabelList from './SmallLabelList';

const TodoItem = ({
  id,
  text,
  important,
  labels,
  onTap,
  completed,
  index,
  ...props
}) => (
  <TouchableOpacity
    onPress={() =>
      onTap({id, text, important, labels, completed, index, ...props})
    }
    style={
      labels && labels.length > 0 ? styles.container : styles.noLabelsContainer
    }>
    <View
      style={
        labels && labels.length > 0 ? styles.wrapper : styles.noLabelsWrapper
      }>
      <Title deactivate={completed}>
        {text && text.length > 32 ? text.slice(0, 32) + '...' : text}
      </Title>
      {important ? (
        <Icon name="star" type="font-awesome" color="#faff00" size={18} />
      ) : null}
    </View>
    <View style={styles.wrapper}>
      <SmallLabelList labels={labels} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noLabelsContainer: {
    height: 35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noLabelsWrapper: {
    width: '90%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  wrapper: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 3,
  },
});

export default TodoItem;
