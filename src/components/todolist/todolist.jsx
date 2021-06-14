import React from 'react';
import TodoListItem from '../todolistitem/todolistitem';
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="todolist">
      {todos.map((todo) => {
        return (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
