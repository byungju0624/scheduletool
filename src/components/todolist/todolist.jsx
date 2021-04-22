import React from 'react';
import TodoListItem from '../todolistitem/todolistitem';
const TodoList = ({ todos }) => {
  return (
    <div className="todolist">
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
