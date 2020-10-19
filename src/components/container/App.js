/**
 * @flow
 */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import VisibleTodoList from '../container/VisibleTodoList';
import AddTodoButton from './AddTodoButton';
import VisibleLabelList from '../container/VisibleLabelList';
import MySearchBar from './MySearchBar';
import {connect} from 'react-redux';
import {signAnonym, updateTodos} from '../../redux/actions';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   space: {
//     height: 1,
//     marginTop: 10,
//   },
// });

class App extends Component {
  componentDidMount() {
    this.props.signAnonym();
  }

  render() {
    //const {padding} = this.props;
    return (
      <View style={{flex: 1}}>
        <MySearchBar />
        <VisibleLabelList />
        <View style={{height: 1, marginTop: 10}} />
        <VisibleTodoList />
        <AddTodoButton />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signAnonym: () => dispatch(signAnonym()),
  updateTodos: (todos) => dispatch(updateTodos(todos)),
});

const mapStateToProps = (state) => ({
  padding: state.labels.length === 0 ? true : false,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
