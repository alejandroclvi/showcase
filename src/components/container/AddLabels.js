/**
 * @flow
 */
import React, {Component} from 'react';
import {StyleSheet, View, TextInput, FlatList, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {removeLabelFromDB, addLabelToDB} from '../../redux/actions';
import MyText from '../../components/presentational/MyText';
import ColorSample from '../../components/presentational/ColorSample';
import ColorPalette from '../../constants/ColorPalette';
import AppButton from '../../components/presentational/AppButton';
import RemovableLabel from '../../components/presentational/RemovableLabel';

const ButtonPanel = ({saveLabels, addLabel}) => (
  <View style={styles.buttonsContainer}>
    <AppButton text="Done" handleTap={() => saveLabels()} />
    <AppButton text="Add Label" handleTap={addLabel} />
  </View>
);

const LabelForm = ({input, updateInput}) => (
  <View style={styles.inputForm}>
    <TextInput
      autoFocus={true}
      autoCapitalize="none"
      style={styles.inputStyle}
      onChangeText={(text) => updateInput(text)}
      value={input}
    />
  </View>
);

const EditableLabelList = ({labels, handleRemoveLabel}) => (
  <View style={styles.labelsContainer}>
    <MyText style={styles.labelTxt}>Labels: </MyText>
    <View style={styles.labels}>
      <FlatList
        data={labels}
        horizontal={true}
        renderItem={({item}) => (
          <RemovableLabel
            onTap={() => handleRemoveLabel(item)}
            text={item.text}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{backgroundColor: item.color, marginRight: 5}}
          />
        )}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  </View>
);

const Palette = ({palette, active, handleActiveColor}) => (
  <View style={styles.colorPalette}>
    {palette.map((color, index) => (
      <ColorSample
        key={`${index}`}
        active={active}
        handleActiveColor={handleActiveColor}
        color={color}
      />
    ))}
  </View>
);

class AddLabels extends Component {
  state = {
    palette: Object.values(ColorPalette),
    initLabels: this.props.labels,
    labels: this.props.labels,
    newTodo: this.props.newTodo,
    input: '',
    active: ColorPalette.yellow,
  };
  addLabel = () => {
    const {labels, active, input} = this.state;
    if (input.trim()) {
      if (labels && labels.length > 0) {
        this.setState({
          input: '',
          labels: labels.concat([{text: input, color: active}]),
        });
      } else {
        this.setState({
          input: '',
          labels: [{text: input, color: active}],
        });
      }
      if (!this.state.newTodo) {
        this.props.addLabelToDB({text: input, color: active});
      }
    }
  };
  saveLabels = () => {
    const {updateLabels, dismissLightBox} = this.props;
    const {labels, initLabels} = this.state;
    if (labels !== initLabels) {
      updateLabels(labels);
    }
    dismissLightBox();
  };
  handleActiveColor = (color) => this.setState({active: color});
  handleRemoveLabel = (labelToRemove) => {
    const {labels} = this.state;
    const filteredLabels = labels.filter(
      (label) => label.text !== labelToRemove.text,
    );
    this.setState({labels: filteredLabels});
    if (!this.state.newTodo) {
      this.props.removeLabelFromDB(labelToRemove);
    }
  };
  updateInput = (input) => this.setState({input});
  render() {
    const {labels, input, palette, active} = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.container} behavior="padding" enabled>
          <MyText style={styles.title}> Add labels </MyText>
          <EditableLabelList
            labels={labels}
            handleRemoveLabel={this.handleRemoveLabel}
          />
          <LabelForm input={input} updateInput={this.updateInput} />
          <Palette
            palette={palette}
            active={active}
            handleActiveColor={this.handleActiveColor}
          />
          <ButtonPanel saveLabels={this.saveLabels} addLabel={this.addLabel} />
        </View>
      </View>
    );
  }
}

const lightBoxWrapperHeight = Dimensions.get('window').height * 0.75;

const styles = StyleSheet.create({
  wrapper: {
    height: lightBoxWrapperHeight,
  },
  container: {
    width: 350,
    height: 325,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 100,
  },
  labelsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 30,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
  },
  labelTxt: {
    fontWeight: 'bold',
  },
  inputForm: {
    marginTop: 10,
  },
  buttonsContainer: {
    width: '80%',
    height: 70,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
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
  colorPalette: {
    width: '70%',
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  labels: {
    width: '75%',
    height: 35,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputStyle: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
    borderRadius: 5,
  },
});

const mapDispatchToProps = (dispatch) => ({
  removeLabelFromDB: (label) => dispatch(removeLabelFromDB(label)),
  addLabelToDB: (label) => dispatch(addLabelToDB(label)),
});

export default connect(null, mapDispatchToProps)(AddLabels);
