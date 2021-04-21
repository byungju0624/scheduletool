import React from 'react';
import TodoListItem from '../todolistitem/todolistitem';
const TodoList = (props) => {
  return (
    <div className="todolist">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
