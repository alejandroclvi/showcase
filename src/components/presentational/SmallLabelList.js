/**
 * @flow
 */

import React from 'react';
import {FlatList} from 'react-native';
import SmallLabel from './SmallLabel';

const SmallLabelList = ({labels}) => (
  <FlatList
    data={labels}
    horizontal={true}
    renderItem={({item}) => <SmallLabel text={item.text} color={item.color} />}
    keyExtractor={(item, index) => `${index}`}
  />
);

export default SmallLabelList;
