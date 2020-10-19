import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import SmallLabelList from '../presentational/SmallLabelList';
import MyText from '../presentational/MyText';
import MyTextInput from '../presentational/MyTextInput';

const MyForm = ({
  todo,
  description,
  labels,
  updateText,
  updateDescription,
  showLightBox,
  autoFocus,
}) => (
  <View>
    <MyTextInput
      name="todo"
      autoFocus={autoFocus}
      onChangeText={(text) => updateText(text)}
      value={todo}
      placeholder="to-do"
      style={styles.todo}
    />
    <TouchableOpacity
      style={styles.labelsContainer}
      onPress={() => showLightBox()}>
      {labels && labels.length > 0 ? (
        <SmallLabelList labels={labels} />
      ) : (
        // eslint-disable-next-line react-native/no-inline-styles
        <MyText style={{color: 'lightgrey'}}>labels</MyText>
      )}
    </TouchableOpacity>
    <MyTextInput
      name="description"
      onChangeText={(text) => updateDescription(text)}
      value={description}
      placeholder="description"
      style={styles.description}
      multiline={true}
    />
  </View>
);

const styles = StyleSheet.create({
  todo: {
    width: '100%',
    height: '5%',
    borderBottomColor: 'lightgrey',
    textAlign: 'center',
  },
  description: {
    width: '100%',
    height: '90%',
    borderBottomColor: 'lightgrey',
    paddingLeft: 10,
    marginBottom: 50,
  },
  labelsContainer: {
    width: '100%',
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderBottomColor: 'lightgrey',
    borderTopColor: 'lightgrey',
    paddingLeft: 10,
  },
});

export default MyForm;
