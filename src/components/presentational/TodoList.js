/**
 * @flow
 */

import React from 'react';
import {FlatList} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos, onTodoTap}) => (
  <FlatList
    data={todos}
    renderItem={({item}) => <TodoItem {...item} onTap={onTodoTap} />}
    keyExtractor={(item, index) => `${index}`}
  />
);

export default TodoList;
