/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Modal} from 'react-native';
import {
  updateTodoText,
  updateTodoDescription,
  updateTodoLabels,
  toggleTodoCompletion,
  toggleTodoImportance,
  showLightBox,
  dismissLightBox,
  addLabelToDB,
} from '../../redux/actions';
import AddLabels from '../container/AddLabels';
import TodoMenu from '../presentational/TodoMenu';
import MyForm from '../presentational/MyForm';
import ColorPalette from '../../constants/ColorPalette';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  componentDidUpdate(prevProps) {
    // TODO: Only update when truly neccessary, e.g. when id, important, ... or any other of these props change.
    const {id, important, text, description, labels, completed} = this.props;
    if (this.props.id !== undefined && this.props.id !== null) {
      this.props.updateTodo({
        text,
        description,
        labels,
        id,
        important,
        completed,
      });
    }
  }
  _handleCheckTap = () => {
    if (this.props.id !== undefined && this.props.id !== null) {
      const completedLabel = {text: 'completed', color: ColorPalette.green};
      const newLabels = this.props.labels.concat([completedLabel]);

      this.props.addLabelToDB(completedLabel);
      this.props.updateLabels(newLabels);
      this.props.toggleTodoCompletion();
    } else {
      const {
        important,
        text,
        description,
        labels,
        completed,
        componentId, // passing componentid as part of a todo object? it works for now
      } = this.props;
      this.props.handleCheckTap({
        text,
        description,
        labels,
        important,
        completed,
        componentId,
      });
    }
  };
  _handleTrashTap = () => {
    const {
      important,
      text,
      description,
      labels,
      id,
      completed,
      componentId,
    } = this.props;
    if (this.props.id !== undefined && this.props.id !== null) {
      this.props.handleTrashTap({
        important,
        text,
        description,
        labels,
        completed,
        id,
        componentId,
      });
    } else {
      // pass componentId
      this.props.handleTrashTap(componentId);
    }
  };
  render() {
    const {
      important,
      id,
      text,
      description,
      labels,
      updateText,
      updateDescription,
      updateLabels,
      completed,
    } = this.props;
    const {showModal} = this.state;
    return (
      <View style={styles.container}>
        <MyForm
          showLightBox={() => this.setState({showModal: true})}
          labels={labels}
          todo={text}
          newTodo={id ? false : true}
          description={description}
          updateText={updateText}
          updateDescription={updateDescription}
          updateLabels={updateLabels}
          autoFocus={id ? false : true}
        />
        <TodoMenu
          disableButton={text.trim()}
          important={important}
          completed={completed}
          handleCheckTap={this._handleCheckTap}
          handleStarTap={this.props.toggleTodoImportance}
          handleTrashTap={this._handleTrashTap}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.wrapper}>
            <AddLabels
              dismissLightBox={() => this.setState({showModal: false})}
              updateLabels={updateLabels}
              // {...this.props}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(1, 1,1, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  text: state.todoForm.text,
  description: state.todoForm.description,
  labels: state.todoForm.labels,
  important: state.todoForm.important,
  completed: state.todoForm.completed,
  id: state.todoForm.id,
});

const mapDispatchToProps = (dispatch) => ({
  updateText: (text) => dispatch(updateTodoText(text)),
  updateDescription: (description) =>
    dispatch(updateTodoDescription(description)),
  updateLabels: (labels) => dispatch(updateTodoLabels(labels)),
  toggleTodoCompletion: () => dispatch(toggleTodoCompletion()),
  toggleTodoImportance: () => dispatch(toggleTodoImportance()),
  showLightBox: (screen) => dispatch(showLightBox(screen)),
  dismissLightBox: (cid) => dispatch(dismissLightBox(cid)),
  addLabelToDB: (label) => dispatch(addLabelToDB(label)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
