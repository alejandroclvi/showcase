/**
 * @flow
 */

import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Label from './Label';

const LabelList = ({labels, onLabelTap, actives}) =>
  labels && labels.length > 0 ? (
    <View style={styles.labelListContainer}>
      <FlatList
        data={labels}
        showsHorizontalScrollIndicator={false}
        extraData={actives}
        horizontal={true}
        renderItem={({item}) => (
          <Label
            actives={actives}
            text={item.text}
            color={item.color}
            onTap={onLabelTap}
          />
        )}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  ) : null;

const styles = StyleSheet.create({
  labelListContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    width: '100%',
  },
});

export default LabelList;
